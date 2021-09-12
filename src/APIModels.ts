/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMusicInput = {
  id?: string | null,
  title: string,
  signer: string,
  duration: string,
  isPlaying?: boolean | null,
};

export type ModelMusicConditionInput = {
  title?: ModelStringInput | null,
  signer?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  isPlaying?: ModelBooleanInput | null,
  and?: Array< ModelMusicConditionInput | null > | null,
  or?: Array< ModelMusicConditionInput | null > | null,
  not?: ModelMusicConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Music = {
  __typename: "Music",
  id: string,
  title: string,
  signer: string,
  duration: string,
  isPlaying?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMusicInput = {
  id: string,
  title?: string | null,
  signer?: string | null,
  duration?: string | null,
  isPlaying?: boolean | null,
};

export type DeleteMusicInput = {
  id: string,
};

export type ModelMusicFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  signer?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  isPlaying?: ModelBooleanInput | null,
  and?: Array< ModelMusicFilterInput | null > | null,
  or?: Array< ModelMusicFilterInput | null > | null,
  not?: ModelMusicFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMusicConnection = {
  __typename: "ModelMusicConnection",
  items?:  Array<Music | null > | null,
  nextToken?: string | null,
};

export type CreateMusicMutationVariables = {
  input: CreateMusicInput,
  condition?: ModelMusicConditionInput | null,
};

export type CreateMusicMutation = {
  createMusic?:  {
    __typename: "Music",
    id: string,
    title: string,
    signer: string,
    duration: string,
    isPlaying?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMusicMutationVariables = {
  input: UpdateMusicInput,
  condition?: ModelMusicConditionInput | null,
};

export type UpdateMusicMutation = {
  updateMusic?:  {
    __typename: "Music",
    id: string,
    title: string,
    signer: string,
    duration: string,
    isPlaying?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMusicMutationVariables = {
  input: DeleteMusicInput,
  condition?: ModelMusicConditionInput | null,
};

export type DeleteMusicMutation = {
  deleteMusic?:  {
    __typename: "Music",
    id: string,
    title: string,
    signer: string,
    duration: string,
    isPlaying?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMusicQueryVariables = {
  id: string,
};

export type GetMusicQuery = {
  getMusic?:  {
    __typename: "Music",
    id: string,
    title: string,
    signer: string,
    duration: string,
    isPlaying?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMusicQueryVariables = {
  filter?: ModelMusicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMusicQuery = {
  listMusic?:  {
    __typename: "ModelMusicConnection",
    items?:  Array< {
      __typename: "Music",
      id: string,
      title: string,
      signer: string,
      duration: string,
      isPlaying?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMusicSubscription = {
  onCreateMusic?:  {
    __typename: "Music",
    id: string,
    title: string,
    signer: string,
    duration: string,
    isPlaying?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMusicSubscription = {
  onUpdateMusic?:  {
    __typename: "Music",
    id: string,
    title: string,
    signer: string,
    duration: string,
    isPlaying?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMusicSubscription = {
  onDeleteMusic?:  {
    __typename: "Music",
    id: string,
    title: string,
    signer: string,
    duration: string,
    isPlaying?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
