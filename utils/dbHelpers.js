import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, query, where } from 'firebase/firestore';
import { firestore } from '@firebase/firebase';

const COLLECTION_NAME = 'inventory';

export const getProducts = async (email) => {
    const q = query(collection(firestore, COLLECTION_NAME), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addProduct = async (email, product) => {
    console.log(email)
    console.log(product)
    const docRef = await addDoc(collection(firestore, COLLECTION_NAME), { ...product, email: email });
    return { id: docRef.id, ...product };
};

export const updateProduct = async (email, id, data) => {
    const productRef = doc(firestore, COLLECTION_NAME, id);
    await updateDoc(productRef, data);
};

export const removeProduct = async (email, id) => {
    const productRef = doc(firestore, COLLECTION_NAME, id);
    await deleteDoc(productRef);
};