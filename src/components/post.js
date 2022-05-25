import { onGetPosts, deletePost } from '../lib/fireStore.js';

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
            const btn = document.createElement('button');

            containerPost.className = 'containerPost';
            btn.className = 'btnDelete';

            btn.setAttribute('data-id', doc.id)

            textWrote.textContent = contentPost;
            containerPost.append(textWrote, btn);
            btn.textContent = 'delete';
            
            paintAllPosts.appendChild(containerPost);
            //console.log(paintAllPosts);
            const btnsDelete = containerPost.querySelectorAll('.btnDelete');
            btnsDelete.forEach(btn =>{
            btn.addEventListener('click', ({target:{ dataset }}) => {
            deletePost(dataset.id);
                })
            })
        });
        
        
    });
        
    return paintAllPosts;
};

export { showedPost };