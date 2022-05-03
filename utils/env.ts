const getEnv = (environmentVariable: string): string => {
  const value = process.env[environmentVariable];
  if (!value) throw new Error(`Couldn't find environment variable: ${environmentVariable}`);
  else return value;
};

export default getEnv;
