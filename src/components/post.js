import { onGetPosts, deletePost, auth} from '../lib/fireStore.js';

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
            console.log(postData);
            const postAuthor = postData.displayName;
            const contentPost = postData.text;
            const containerPost = document.createElement('section');
            const author = document.createElement('p');
            const textWrote = document.createElement('p');
            const btn = document.createElement('button');

            containerPost.className = 'containerPost';
            author.className = 'author';
            textWrote.className = 'textWrote';
            btn.className = 'btnDelete';

            btn.setAttribute('data-id', doc.id);
            btn.setAttribute('name', auth.currentUser.displayName);

            author.textContent = postAuthor;
            textWrote.textContent = contentPost;
            containerPost.append(author, textWrote, btn);
            btn.textContent = 'delete';
            
            paintAllPosts.appendChild(containerPost);
            //console.log(paintAllPosts);
            const btnsDelete = containerPost.querySelectorAll('.btnDelete');
            btnsDelete.forEach(btn =>{
            btn.addEventListener('click', ({target:{ dataset }}) => {
                if(postAuthor == btn.getAttribute('name') ){
                    deletePost(dataset.id);
                    }
                })
            })
        });
        
        
    });
        
    return paintAllPosts;
};

export { showedPost };