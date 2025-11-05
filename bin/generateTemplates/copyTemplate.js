import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

function getTemplatePath(filename, folders) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(
    __dirname,
    ...folders,
    filename
  );
}

export function copyTemplate(destination, filename, folders) {
  const content = fs.readFileSync(getTemplatePath(filename, folders), 'utf-8');
  fs.writeFileSync(destination, content);
}