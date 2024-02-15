export interface Props {
    titulo: string; 
    subtitulo: string;  
  }
  
  export default function TituloDaPagina({ titulo, subtitulo }: Props) {
    return (
      <div>
        <h1 class="font-semibold text-center mt-8 text-4xl">{titulo}</h1>  
        <h2 class="font-medium text-center mt-4 mb-8">{subtitulo}</h2>
      </div>
    );
}