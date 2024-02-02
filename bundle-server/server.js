const path = require('path')
const express = require('express')

const app = express();
app.use(express.static(path.join(__dirname, '../dist/apps/ui/browser')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/apps/ui/browser/index.html'));
});
app.listen(4200, () => {
  console.log(`Server on port 4200`)
})
