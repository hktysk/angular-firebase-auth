# angular-firebase-auth
ユーザー認証のみの実装です  
firebase initはしていないので、デプロイは想定していません  
  
firebaseの設定ファイルをGit管理から外しています  
環境変数には今回してないので、  
firebaseの設定ファイルを作成していただいたら、各自の環境で確認/開発できます  
  
- firebase.config.ts

```firebase.config.ts
import { FirebaseOptions } from '@firebase/app-types'

export const firebaseConfig: FirebaseOptions = {
  apiKey: 'API_KEY',
  authDomain: 'AUTH_DOMAIN',
  databaseURL: 'DATABASE_URL',
  projectId: 'PROJECT_ID',
  storageBucket: 'STORAGE_BUCKET',
  messagingSenderId: 'MESSAGIN_SENDERID',
  appId: 'APP_ID'
}
```