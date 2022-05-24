import { onGetPosts } from '../lib/fireStore.js';

const showedPost = () =>{
    const paintAllPosts = document.createElement('section');

    paintAllPosts.className = 'paintAllPosts';
//-------------- Pintar post en pantalla ----------------------------------
    onGetPosts((querySnapshot) =>{
        while(paintAllPosts.firstChild){
            paintAllPosts.removeChild(paintAllPosts.firstChild)
        }
        
        querySnapshot.forEach(doc => {
            const postData = doc.data()
            const contentPost = postData.text;
            const containerPost = document.createElement('section');
            const textWrote = document.createElement('p');

            containerPost.className = 'containerPost';

            textWrote.textContent = contentPost;
            containerPost.appendChild(textWrote);
            
            paintAllPosts.appendChild(containerPost);
            //console.log(paintAllPosts);
        });
        
    });
        
    return paintAllPosts;
};

export { showedPost };