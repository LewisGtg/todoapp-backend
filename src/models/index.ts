import * as fs from 'fs';
import * as path from 'path';

const models: { [key: string]: any } = {};
const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.ts') && file !== basename)
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    const modelName = path.basename(file, '.ts');
    models[modelName] = model;
  });

export default models;
