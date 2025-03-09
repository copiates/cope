#!/bin/bash

# List of all the files that originally had Footer imports
FILES=(
  "src/Pages/documents-requirements/PF.jsx"
  "src/Pages/documents-requirements/Shops.jsx"
  "src/Pages/documents-requirements/Proprietorship.jsx"
  "src/Pages/documents-requirements/PrivateLimited.jsx"
  "src/Pages/documents-requirements/Income-Filing.jsx"
  "src/Pages/documents-requirements/GST.jsx"
  "src/Pages/documents-requirements/OPC.jsx"
  "src/Pages/documents-requirements/IECode.jsx"
  "src/Pages/documents-requirements/ESI.jsx"
  "src/Pages/documents-requirements/Labour.jsx"
  "src/Pages/documents-requirements/Partnership.jsx"
  "src/Pages/documents-requirements/LLP.jsx"
  "src/Pages/documents-requirements/PTR.jsx"
  "src/Pages/documents-requirements/LEI.jsx"
  "src/Pages/services/Services1.jsx"
  "src/Pages/services/Services2.jsx"
  "src/Pages/services/Services3.jsx"
)

for FILE in "${FILES[@]}"; do
  echo "Processing $FILE"
  
  # Add the Footer import line after the first import statement
  sed -i '' '1,/import/s/$/\nimport Footer from "..\/..\/containers\/footer\/Footer";/' "$FILE"
  
  # Add the Footer component usage before the closing div
  sed -i '' 's/<\/div>/<Footer \/>\n<\/div>/' "$FILE"
done

echo "Done restoring Footer imports and usages"
