import Feed from "../componentes/Feed";

export default function MostViewed() {
    const posts = [
        {
            id: Math.random(),
            content: 'content',
            userName: 'Samuel',
            publishedAt: new Date(),
        }
    ];

    return (
    <main className="most-viewed">
        <Feed
         posts={posts} 
         title="Mais Vistos"
         subtitle= "Acompanhe os assuntos mais comentados no momento e fique  por dentro de qualquer novidade"
        />
    </main >)

}