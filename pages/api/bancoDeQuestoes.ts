import QuestaoModel from "../../model/questao"
import RespostaModel from "../../model/resposta"

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho trasmite a Doenca de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro')
    ]),
    new QuestaoModel(307, 'Qual fruto é conhecido no Norte e Nordeste como jerimum?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Coco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abobora')
    ]),
    new QuestaoModel(308, 'Qual é o coletivo de caes?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha')
    ]),
    new QuestaoModel(309, 'Qual é o triangulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilatero'),
        RespostaModel.errada('Isoceles'),
        RespostaModel.errada('Retangulo'),
        RespostaModel.certa('Escaleno')
    ])
]

export default questoes