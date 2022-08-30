

import './styles/App.css';
import './styles/PostForm.css';
import './styles/Feed.css'

import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg';
import clockIcon from './images/clock.svg'
import emptyFolderIcon from './images/empty-folder.svg'


export default function App() {
    const posts = [
        { //vai gerar um Id aleatório 
            id: Math.random(),
            content: 'Contéudo de post',
            userName: 'Samuel',
            publishedAt: new Date(),
        },
    ];

    return (
        <div className="wrapper">
            <form className="post-form" onSubmit={() => alert('Formulário submetido')}>
                <input placeholder='Escreva uma nova Historia...' />

                <div>
                    <img src={userIcon} alt='User' />

                    <input placeholder='Digite um Nome...' />

                    <button type='submit'>
                        <img src={paperPlaneIcon} alt="Paper Plane" />

                        Publicar
                    </button>
                </div>
            </form>

            <main>
                {posts.length === 0 ? <div className='feed-status'>
                    <img src={emptyFolderIcon} alt='Empty Folder' />

                    <h1>Não encontramos nada
                    </h1>
                    <h2>Parece que seus amigos não postaram nada. Comece a escrever uma nova história!
                    </h2>
                </div> : null}

                {posts.length > 0 && 
                <>
                    <header>
                            <h1>Seu Feed</h1>
                            <h2>
                                Acompanhe oque seus amigos estão pensado em tempo real
                            </h2>
                     </header>
                    
                    <section className='feed'>
                        {posts.map((posts) => (
                            <article key={posts.id}>
                                <p>
                                    {posts.content}
                                </p>
                                <footer>
                                    <div className='user-details'>
                                        <img src={userIcon} alt='User' />
                                        <strong>{posts.userName}</strong>
                                    </div>
                                    <div className='time'>
                                        <img src={clockIcon} alt='Clock' />
                                        <span>
                                            Publicado em {posts.publishedAt.toLocaleDateString('pt-br')}
                                        </span>
                                    </div>
                                </footer>
                            </article>
                        ))}
                    </section>
                </>
                }
            </main >
        </div >
    );
}