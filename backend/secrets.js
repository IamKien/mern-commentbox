const secrets = {
  dbUri: "mongodb://kdoan:qwer1234@ds217452.mlab.com:17452/mern-comment-box"
};

export const getSecret = key => secrets[key];