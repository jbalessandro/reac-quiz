import questoes from '../bancoDeQuestoes'

export default function handler(req, res) {
    const id = +req.query.id

    const questao = questoes.filter(q => q.id === id);

    if (questao.length === 1) {
        const questaoSelecionada = questao[0].embaralharRespostas()
        res.status(200).json(questaoSelecionada.toObject())
    } else {
        res.status(204).send()
    }
}