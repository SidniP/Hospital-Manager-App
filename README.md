# Hospital Manager

Hospital Manager është një aplikacion CRUD për menaxhimin e pacientëve në një spital. Ai lejon krijimin, leximin, përditësimin dhe fshirjen e pacientëve me një ndërfaqe të thjeshtë dhe të organizuar.

## Struktura e Projektit

```
- server/
  - controllers/
  - config/
  - models/
  - routes/
  - .env
  - server.js
- client/
  - src/
    - components/
      - AdmitPatient.jsx
      - PatientList.jsx
      - PatientDetails.jsx
      - UpdatePatient.jsx
      - AdmitPatient.css
      - PatientList.css
      - PatientDetails.css
      - UpdatePatient.css
    - App.css
    -App.jsx
    - axiosConfig.js
    index.css
    - main.jsx

```

## Teknologjitë e Përdorura

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Menaxhimi i Thirrjeve API**: Axios

## Udhëzime për Instalimin dhe Ekzekutimin

1. **Klononi projektin:**

   ```bash
   git clone https://github.com/SidniP/Hospital-Manager-App.git
   cd hospital-manager
   ```

2. **Instalimi i varësive të backend-it:**

   ```bash
   cd server
   npm install
   ```

3. **Krijimi i skedarit `.env` në dosjen `server/`:**

   Përfshini të dhënat tuaja për lidhjen me MongoDB:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=4000
   ```

4. **Nisja e serverit:**

   ```bash
   node serve.js
   ```

5. **Instalimi i varësive të frontend-it:**

   ```bash
   cd ../client
   npm install
   ```

6. **Nisja e aplikacionit React:**

   ```bash
   npm run dev
   ```

7. **Hapni aplikacionin në shfletuesin tuaj:**

   Vizitoni [http://localhost:5173](http://localhost:5173).

## Funksionalitetet

- **Admit Patient**: Regjistroni pacientë të rinj.
- **View Patient List**: Shfaqni listën e pacientëve ekzistues.
- **Update Patient**: Përditësoni informacionin e pacientit.
- **Discharge Patient**: Fshijeni pacientin nga lista.



## Licenca

Ky projekt është i licencuar nën [MIT License](LICENSE).

