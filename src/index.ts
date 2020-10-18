import { PORT } from './utils/config';
import app from './app';

app.listen(PORT, () => {
  console.warn(`App listening on port ${PORT || 'PORT is undefined.'}`);
});
