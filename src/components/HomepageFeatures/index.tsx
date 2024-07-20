import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'My Projects',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I have worked on various projects related to fintech and e-commerce, collaborating with multiple payment gateways to deliver seamless and secure transactions. My projects are designed to enhance user experience and streamline operations..
      </>
    ),
  },
  {
    title: 'Experience',
    Svg : require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        With 2 years of experience in software development, I am proficient in both app and web technologies. My background includes designing, developing, and deploying high-quality software solutions tailored to meet client needs.
      </>
    ),
  },
  {
    title: 'Technical Skills',
    Svg: require('@site/static/img/skills.svg').default,
    description: (
      <>
        I am adept at working with multiple programming languages, including GoLang, PHP, JavaScript, and Python, as well as their respective frameworks. My diverse skill set allows me to adapt to different project requirements and deliver robust solutions.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
