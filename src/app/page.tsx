import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const images = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 40, 41, 42, 43, 44, 45, 46, 48,
    49, 50, 51, 52, 53, 54, 55, 56,
  ];
  return (
    <div>
      <header className="w-full h-16 bg-zinc-200 absolute">
        <div className="flex lg:flex-row flex-col items-center justify-between py-2 px-4 h-full">
          <h1 className="flex items-center text-xl font-bold">
            Feira de Artesanato da Monguba
          </h1>
          <nav className="flex gap-x-4 items-center">
            <a className="hover:underline" href="#section-1">
              Início
            </a>
            <a className="hover:underline" href="#section-2">
              Vídeo
            </a>
            <a className="hover:underline" href="#section-3">
              Fotos
            </a>
            <a className="hover:underline" href="#section-4">
              Sobre
            </a>
            <a className="hover:underline" href="#section-5">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="section-1"
          className="h-screen px-4 bg-slate-800 text-zinc-100 gap-y-4 flex w-full flex-col justify-center items-center pt-16"
        >
          <Image
            src="/geral.JPEG"
            width={600}
            height={400}
            alt="Foto geral da feira"
          />
          <p className="max-w-xl text-justify">
            A Feira de Artesanato da Monguba foi realizada no dia 08 de março de
            2024 (Dia Internacional da Mulher) na Escola Major Manoel Assis
            Nepomuceno na Monguba, Pacatuba-CE.
          </p>
          <p className="max-w-xl text-justify">
            Participaram da feira artesãs da própria comunidade e puderam
            mostrar seus trabalhos com diversos tipos diferentes de artesanato
            como: Cerâmica, Pintura em telha, Crochê e EVA.
          </p>
        </section>

        <section
          id="section-2"
          className="px-4 h-screen bg-cyan-800 text-zinc-100 gap-y-4 flex w-full flex-col justify-center items-center"
        >
          <h1 className="text-xl font-bold">Mini Documentário</h1>
          <iframe
            className=" lg:w-[860px] h-[480px]"
            src="https://www.youtube-nocookie.com/embed/K9hLlgNOc3Q?si=Y1LRl1BcaTSyWLOR"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <p className="max-w-[860px] text-justify">
            Durante a feira foi feita filmagens para produção deste pequeno
            vídeo, mostrando um pouco do trabalho de cada uma das artesãs.
          </p>
        </section>

        <section
          id="section-3"
          className="h-full bg-slate-800 text-zinc-100 gap-y-4 flex w-full flex-col justify-center items-center py-4"
        >
          <h1 className="text-xl font-bold">Registro fotográfico da feira</h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <Image
                key={image}
                alt="foto-feira"
                width={200}
                height={200}
                src={`/fotos/feira (${image}).JPEG`}
              />
            ))}
          </div>
        </section>

        <section
          id="section-4"
          className="px-4 h-screen bg-cyan-800 text-zinc-100 gap-y-4 flex w-full flex-col justify-center items-center"
        >
          <h1 className="text-xl font-bold">Sobre</h1>
          <div className="max-w-[860px] flex flex-col gap-y-4 text-justify">
            <p>
              O projeto &ldquo;Artesanato - Mãos Talentosas&rdquo; é motivado
              pela necessidade de preservar e promover o patrimônio cultural e
              artístico do bairro da Monguba e da tribo Pitaguary, enquanto
              destaca a criatividade e habilidade dos artesãos locais. O
              artesanato desempenha um papel fundamental na preservação da
              identidade cultural dessas comunidades, sendo uma fonte de renda e
              um meio de expressão artística. As filmagens foram feitas no dia 8
              de março de 2024 na Escola Major Assis Nepomuceno em Monguba.
            </p>
            <p>
              Projeto: Artesanato Mãos Talentosas; Número do TEC Termo de
              Execução Cultural: 0052/2024; Município de Pacatuba-CE; Secretaria
              de Cultura
            </p>
            <p>
              Artesãs: Cícera Feitosa Antônia Maria Feitosa Maria Madalena
              Francisca Sousa Direção: Alex Gomes Coordenação: Laylson Sousa
              Audiovisual: Henan Baltazar
            </p>
          </div>
        </section>

        <section
          id="section-5"
          className="h-screen bg-slate-800 text-zinc-100 gap-y-4 flex w-full flex-col justify-center items-center py-4"
        >
          <h1 className="text-xl font-bold">Contatos</h1>
          <div className="flex flex-col">
            <table className="w-bg-zinc-200">
              <tbody>
                <tr>
                  <td className="px-1 lg:px-4 py-2 ">Direção:</td>
                  <td className="px-1 lg:px-4 py-2 ">Alex Gomes</td>
                  <td className="px-1 lg:px-4 py-2 ">(85) 9 8799-4777</td>
                </tr>
                <tr>
                  <td className="px-1 lg:px-4 py-2 ">Coordenação:</td>
                  <td className="px-1 lg:px-4 py-2 ">Laylson Sousa</td>
                  <td className="px-1 lg:px-4 py-2 ">(85) 9 9644-5801</td>
                </tr>
                <tr>
                  <td className="px-1 lg:px-4 py-2 ">Audiovisual:</td>
                  <td className="px-1 lg:px-4 py-2 ">Henan Baltazar</td>
                  <td className="px-1 lg:px-4 py-2 ">(85) 9 8833-3854</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="h-16 bg-zinc-900 text-white flex items-center justify-center">
        <p>Feira de Artesanato da Monguba &copy; 2024</p>
      </footer>
    </div>
  );
}
