import {ActionType} from "./types";

interface newAction {
    type:ActionType.ADD_ARTICLE,
    payload: object
}

type ArticleState = {
    articles: newAction[]
}

type ArticleAction = {
    type: string
    article: newAction
}

export type Action = newAction
