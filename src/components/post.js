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
            const btnDelete = document.createElement('button');
            const btnEdit = document.createElement('button');

            containerPost.className = 'containerPost';
            author.className = 'author';
            textWrote.className = 'textWrote';
            btnDelete.className = 'btnDelete';
            btnEdit.className = 'btnEdit';

            btnDelete.setAttribute('data-id', doc.id);
            btnDelete.setAttribute('name', auth.currentUser.displayName);
            btnEdit.setAttribute('data-id', doc.id);
            btnEdit.setAttribute('name', auth.currentUser.displayName);

            author.textContent = postAuthor;
            textWrote.textContent = contentPost;
            containerPost.append(author, textWrote, btnEdit, btnDelete);
            btnDelete.textContent = 'delete';
            btnEdit.textContent = 'edit';
            
            paintAllPosts.appendChild(containerPost);
            //console.log(paintAllPosts);
            const btnsDelete = containerPost.querySelectorAll('.btnDelete');
            btnsDelete.forEach(btn =>{
            btn.addEventListener('click', ({target:{ dataset }}) => {
                if(postAuthor == btnDelete.getAttribute('name') ){
                    deletePost(dataset.id);
                    }
                })
            })

            /*const btnsEdit = containerPost.querySelectorAll('.btnEdit');
            btnsEdit.forEach(btn =>{
                btn.addEventListener('click', async (e) => {
                   const doc = await getPost(e.target.dataset.id)
                   const post = doc.data();
                   
                   contentPost.value
                })
            })*/

        });
        
        
    });
        
    return paintAllPosts;
};

export { showedPost };