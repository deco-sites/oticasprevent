import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  imagem?: {
    Imagem: ImageWidget;
    Alt?: string;
  };
  /**
   * @title Título da Loja
   */
  tituloloja: string; 
  /**
   * @title Endereço
   */
  endereco: string; 
  email?: string; 
  telefone?: string; 
  /**
   * @title Horário
   */
  horario?: string;  
  /**
   * @title Imagem à direita?
   */
  lado?: boolean;
}

export default function TituloDaPagina({ tituloloja, endereco,telefone,horario,email,imagem,lado}: Props) {
  return (
    <div class="grid grid-cols-2">
      {lado}
      <div class="">
        <img
          loading="lazy"
          src={imagem?.Imagem}
          alt={imagem?.Alt} 
          class="w-full"
        />
      </div>
      <div class="flex content-center justify-center flex-wrap">
        <div class="w-1/2">
          <h2 class="font-semibold mb-4 text-4xl w-full">{tituloloja}</h2>
          <span></span>
          <p class="my-2 w-full">{endereco}</p>
          <br>
          <p class="my-2 w-full">{email}</p>
          <p class="my-2 w-full">{telefone}</p>
          <p class="my-2 w-full">{horario}</p>
        </div>
      </div>
    </div>
  );
}