const sectionArr = [
  {
    type: "grid",
    data: "grid",
  },
  {
    type: "textBlock",
    data: "textBlock",
  },
  {
    type: "imageBlock",
    data: "imageBlock",
  },
];

const data = {
  header: {
    title: "Header Title",
    children: "Header Subtitle",
  },
  hero: {
    textblock: {
      title: "Martin Crabtree",
      subtitle: "Full-stack Developer",
      body: "React, Jest, Storybook, Styled-components, Ruby, Rails, SQL, REST API, JavaScript, Redux, HTML/CSS, Java, C#, SQL, PostgreSQL, SQLite, Linux, Git, TypeScript, Express.js",
    },
    imageblock: {},
  },
  sections: {
    sections: sectionArr,
  },
  footer: {},
};

export default data;
