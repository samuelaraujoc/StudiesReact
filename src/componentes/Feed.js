import userIcon from '../images/user.svg';
import clockIcon from '../images/clock.svg';
import emptyFolderIcon from '../images/empty-folder.svg';

import '../styles/Feed.css'

export default function Feed(props) {
    if (props.posts.length === 0) {
        return (
            <div className='feed-status'>
                <img src={emptyFolderIcon} alt='Empty Folder' />

                <h1>Não encontramos nada
                </h1>
                <h2>Parece que seus amigos não postaram nada. Comece a escrever uma nova história!
                </h2>
            </div>
        );
    }

    return (
        <>
            <header>
                <h1>Seu Feed</h1>
                <h2>
                    Acompanhe oque seus amigos estão pensado em tempo real
                </h2>
            </header>

            <section className='feed'>
                {props.posts.map((posts) => (
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
    );

}