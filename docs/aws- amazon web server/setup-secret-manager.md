---
sidebar_position: 8
---

# How to Use AWS Secrets Manager with Laravel 

## Step 1: Create a Service File in Laravel

In Laravel, create a service file to interact with AWS Secrets Manager. Here’s the code for the service:

```php

<?php

namespace App\Services;

use Aws\SecretsManager\SecretsManagerClient;
use Aws\Exception\AwsException;
use Illuminate\Support\Facades\Log;

class AWSSecretsManagerService
{
    protected $client;

    public function __construct()
    {
        $this->client = new SecretsManagerClient([
            'version' => 'latest',
            'region'  => env('AWS_DEFAULT_REGION', 'eu-north-1'),
        ]);
    }

    public function getSecretValue($secretName)
    {
        try {
            $result = $this->client->getSecretValue([
                'SecretId' => $secretName,
            ]);

            if (isset($result['SecretString'])) {
                $secret = $result['SecretString'];
                return json_decode($secret, true);
            } else {
                Log::error('SecretBinary is not supported in this example.');
                return null;
            }
        } catch (AwsException $e) {
            // Handle error
            Log::error('Error retrieving secret: ' . $e->getMessage());
            return null;
        }
    }
}

```

This code defines a service to interact with AWS Secrets Manager. It initializes the Secrets Manager client, retrieves the secret value, and handles any errors.

### Step 2: Use the Service in Your Laravel Application

Now, use the service in your application like this:

```php

$secretManager = new AWSSecretsManagerService();
$secrets = $secretManager->getSecretValue('MY_TEST_SECRET')
$secret_user_key = $secrets['USER_KEY'] ?? 'none';
```

Make sure you set your AWS region in the `.env` file:

```makefile
AWS_DEFAULT_REGION=your-region
```

---

### Step 3: Set Up Secrets Manager on AWS

### 1. Create a Secret in AWS Secrets Manager

- Go to the **Secrets Manager** service in the AWS Console.
- Create a new secret and store the secret values.

### 2. Create an IAM Policy for Secret Access

- Go to the **IAM** service in AWS.
- Select **Policies** and click **Create Policy**.
- Add this JSON in the policy editor and name it `ForSecretManagerAccess` (you can choose any name):

```json

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "secretsmanager:GetSecretValue",
      "Resource": "SecretARN"
    },
    {
      "Effect": "Allow",
      "Action": "kms:Decrypt",
      "Resource": "KMSKeyARN"
    }
  ]
}

```

- Replace `SecretARN` with the ARN of the secret you created in Secrets Manager. This ensures that only this specific secret is accessible. If you need access to multiple secrets, you can add their ARNs or use `` for all secrets (though this is less secure).

### 3. Create an IAM Role for EC2 Access

- Go to **Roles** in IAM.
- Click **Create Role** and select **AWS Service** as the trusted entity type.
- Choose **EC2** as the use case.
- Attach the `ForSecretManagerAccess` policy you just created.
- Save the role.

### 4. Assign the IAM Role to Your EC2 Instance

- Go to **EC2** in the AWS Console.
- Select the EC2 instance that needs access to Secrets Manager.
- Click on **Actions** > **Security** > **Modify IAM Role**.
- Select the IAM role you just created and assign it to the EC2 instance.

---

### Step 4: Retrieving the Secret Value from the Command Line

You can also use the AWS CLI to retrieve secret values. Here’s the command:

```bash

aws secretsmanager get-secret-value --secret-id MY_TEST_SECRET --region eu-north-1

```

---

### Explanation of Key AWS Concepts

- **IAM (Identity and Access Management)**: IAM is a service that allows you to control access to AWS resources. You can define who can access what resources and what actions they can perform.
- **IAM Role**: An IAM role is a set of permissions that can be assumed by an AWS service (like EC2) or an entity (like a user). It’s not associated with a specific user or group but can be assumed by the EC2 instance to perform actions on your behalf, such as accessing AWS Secrets Manager.
- **IAM Policy**: An IAM policy defines permissions for a role or user. For example, a policy can allow or deny access to specific AWS services like Secrets Manager or EC2. In our case, the policy allows EC2 to access the secret in Secrets Manager.
- **AWS Secrets Manager**: Secrets Manager is a service that helps you manage sensitive information, such as API keys, passwords, and database credentials. You can store and retrieve these secrets securely using the AWS SDK or the AWS CLI.
- **Assigning Roles to EC2**: When you assign an IAM role to an EC2 instance, that instance inherits the permissions defined in the role. This allows your application to access resources (like Secrets Manager) securely without needing hardcoded credentials.