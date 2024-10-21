# Teste DIO, proposto como "Classificador de Nível de Herói" 🎓

____

### -Objetivos 📄

Teste com objetivo de desenvolver familiaridade e competencias com:
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

O teste teve como desafio armazenar o nome e a quantidade de experiência (XP) de um "herói", apos utilizar uma estrutura de decisão para apresentar determinar seu nivel. Tais quais seguem o seguinte padrão:

| Faixa de XP              | Classificação |
|--------------------      |---------------|
| xp <= 1.000              | Ferro         |
| 1.000 < xp <= 2.000      | Bronze        |
| 2.000 < xp <= 5.000      | Prata         |
| 5.000 < xp <= 7.000      | Ouro          |
| 7.000 < xp <= 8.000      | Platina       |
| 8.000 < xp <= 9.000      | Ascendente    |
| 9.000 < xp <= 10.000     | Imortal       |
| xp > 10.000              | Radiante      |

---
### - Abordagem utilizada 👌

Dentro do codigo, todas variaves forma definidas como let, tendo em vista que as mesmas estão sujeitas a alterações.

 Mesmo tendo em vista que a abordagem mais simples para calcular o nivel do jogador seria multiplicar a variavel "partidasGanhas" por "xpPorPartida" e logo apos somar à variavel "nivel" , foi usando um laço de repetição "for", foi escolhido tal abordagem a fim de suprir uma das exigencias do desafio.
 
 Para a estrutura de descisões, optei por criar um vetor o qual contem todoas as patentes presentes, dessa forma caso viesse a ter alguma alterção nas mesmas a manutenção do codigo seria mais pratica e rapida, alterando apenas a patente dessejada no vetor. Para as condicionais foi feito o uso simples de operadores logicos.
 
 Ao fim do codigo, é dado o output com a mensagem exigida, concatenando as informações de nome e nivel, com a mensagem pressuposta.
 
