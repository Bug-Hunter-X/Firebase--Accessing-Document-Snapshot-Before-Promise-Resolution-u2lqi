The solution involves using async/await or promises to ensure the data is fetched before accessing its properties.  Here's how to do it with async/await:

```javascript
async function getData() {
  try {
    const docRef = db.collection('yourCollection').doc('yourDocID');
    const docSnap = await docRef.get();
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }
}
getData();
```

And using promises:

```javascript
db.collection('yourCollection').doc('yourDocID').get().then((docSnap) => {
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.error("Error fetching document:", error);
});
```
Replace `'yourCollection'` and `'yourDocID'` with your actual collection and document ID.