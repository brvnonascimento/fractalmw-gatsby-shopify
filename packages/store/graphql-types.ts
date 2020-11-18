export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export interface BooleanQueryOperatorInput {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type CoreOptions = Node & {
  shopName?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Node[]
  internal: Internal
}

export interface CoreOptionsConnection {
  totalCount: Scalars['Int']
  edges: CoreOptionsEdge[]
  nodes: CoreOptions[]
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: CoreOptionsGroupConnection[]
}

export interface CoreOptionsConnectionDistinctArgs {
  field: CoreOptionsFieldsEnum
}

export interface CoreOptionsConnectionGroupArgs {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: CoreOptionsFieldsEnum
}

export interface CoreOptionsEdge {
  next?: Maybe<CoreOptions>
  node: CoreOptions
  previous?: Maybe<CoreOptions>
}

export type CoreOptionsFieldsEnum =
  | 'shopName'
  | 'accessToken'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export interface CoreOptionsFilterInput {
  shopName?: Maybe<StringQueryOperatorInput>
  accessToken?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export interface CoreOptionsGroupConnection {
  totalCount: Scalars['Int']
  edges: CoreOptionsEdge[]
  nodes: CoreOptions[]
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export interface CoreOptionsSortInput {
  fields?: Maybe<Array<Maybe<CoreOptionsFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export interface DateQueryOperatorInput {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Node[]
  internal: Internal
}

export interface DirectoryModifiedTimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface DirectoryAccessTimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface DirectoryChangeTimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface DirectoryBirthTimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface DirectoryAtimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface DirectoryMtimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface DirectoryCtimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface DirectoryConnection {
  totalCount: Scalars['Int']
  edges: DirectoryEdge[]
  nodes: Directory[]
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: DirectoryGroupConnection[]
}

export interface DirectoryConnectionDistinctArgs {
  field: DirectoryFieldsEnum
}

export interface DirectoryConnectionGroupArgs {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export interface DirectoryEdge {
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export interface DirectoryFilterInput {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export interface DirectoryGroupConnection {
  totalCount: Scalars['Int']
  edges: DirectoryEdge[]
  nodes: Directory[]
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export interface DirectorySortInput {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export interface DuotoneGradient {
  highlight: Scalars['String']
  shadow: Scalars['String']
  opacity?: Maybe<Scalars['Int']>
}

export type File = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  url?: Maybe<Scalars['String']>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>
  childImageSharp?: Maybe<ImageSharp>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Node[]
  internal: Internal
}

export interface FileModifiedTimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface FileAccessTimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface FileChangeTimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface FileBirthTimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface FileAtimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface FileMtimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface FileCtimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface FileConnection {
  totalCount: Scalars['Int']
  edges: FileEdge[]
  nodes: File[]
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: FileGroupConnection[]
}

export interface FileConnectionDistinctArgs {
  field: FileFieldsEnum
}

export interface FileConnectionGroupArgs {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export interface FileEdge {
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export interface FileFilterInput {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export interface FileGroupConnection {
  totalCount: Scalars['Int']
  edges: FileEdge[]
  nodes: File[]
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export interface FileSortInput {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export interface FloatQueryOperatorInput {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION'

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE'

export type ImageFormat =
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP'

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>
  fluid?: Maybe<ImageSharpFluid>
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>
  original?: Maybe<ImageSharpOriginal>
  resize?: Maybe<ImageSharpResize>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Node[]
  internal: Internal
}

export interface ImageSharpFixedArgs {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export interface ImageSharpResolutionsArgs {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export interface ImageSharpFluidArgs {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export interface ImageSharpSizesArgs {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export interface ImageSharpResizeArgs {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionLevel?: Maybe<Scalars['Int']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  base64?: Maybe<Scalars['Boolean']>
  traceSVG?: Maybe<Potrace>
  toFormat?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export interface ImageSharpConnection {
  totalCount: Scalars['Int']
  edges: ImageSharpEdge[]
  nodes: ImageSharp[]
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: ImageSharpGroupConnection[]
}

export interface ImageSharpConnectionDistinctArgs {
  field: ImageSharpFieldsEnum
}

export interface ImageSharpConnectionGroupArgs {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ImageSharpFieldsEnum
}

export interface ImageSharpEdge {
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export interface ImageSharpFilterInput {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export interface ImageSharpFixed {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export interface ImageSharpFixedFilterInput {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export interface ImageSharpFluid {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export interface ImageSharpFluidFilterInput {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export interface ImageSharpGroupConnection {
  totalCount: Scalars['Int']
  edges: ImageSharpEdge[]
  nodes: ImageSharp[]
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export interface ImageSharpOriginal {
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
}

export interface ImageSharpOriginalFilterInput {
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
}

export interface ImageSharpResize {
  src?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  originalName?: Maybe<Scalars['String']>
}

export interface ImageSharpResizeFilterInput {
  src?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export interface ImageSharpResolutions {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export interface ImageSharpResolutionsFilterInput {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export interface ImageSharpSizes {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export interface ImageSharpSizesFilterInput {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export interface ImageSharpSortInput {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export interface Internal {
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export interface InternalFilterInput {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export interface IntQueryOperatorInput {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** Node Interface */
export interface Node {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Node[]
  internal: Internal
}

export interface NodeFilterInput {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export interface NodeFilterListInput {
  elemMatch?: Maybe<NodeFilterInput>
}

export interface PageInfo {
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export interface Potrace {
  turnPolicy?: Maybe<PotraceTurnPolicy>
  turdSize?: Maybe<Scalars['Float']>
  alphaMax?: Maybe<Scalars['Float']>
  optCurve?: Maybe<Scalars['Boolean']>
  optTolerance?: Maybe<Scalars['Float']>
  threshold?: Maybe<Scalars['Int']>
  blackOnWhite?: Maybe<Scalars['Boolean']>
  color?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
}

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY'

export interface Query {
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  imageSharp?: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
  coreOptions?: Maybe<CoreOptions>
  allCoreOptions: CoreOptionsConnection
  shopifyProductOption?: Maybe<ShopifyProductOption>
  allShopifyProductOption: ShopifyProductOptionConnection
  shopifyProductVariant?: Maybe<ShopifyProductVariant>
  allShopifyProductVariant: ShopifyProductVariantConnection
  shopifyProduct?: Maybe<ShopifyProduct>
  allShopifyProduct: ShopifyProductConnection
  shopifyCollection?: Maybe<ShopifyCollection>
  allShopifyCollection: ShopifyCollectionConnection
  shopifyShop?: Maybe<ShopifyShop>
  allShopifyShop: ShopifyShopConnection
  shopifyShopPolicy?: Maybe<ShopifyShopPolicy>
  allShopifyShopPolicy: ShopifyShopPolicyConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
}

export interface QueryFileArgs {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export interface QueryAllFileArgs {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export interface QueryDirectoryArgs {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export interface QueryAllDirectoryArgs {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export interface QuerySiteArgs {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export interface QueryAllSiteArgs {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export interface QuerySitePageArgs {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export interface QueryAllSitePageArgs {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export interface QueryImageSharpArgs {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export interface QueryAllImageSharpArgs {
  filter?: Maybe<ImageSharpFilterInput>
  sort?: Maybe<ImageSharpSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export interface QueryCoreOptionsArgs {
  shopName?: Maybe<StringQueryOperatorInput>
  accessToken?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export interface QueryAllCoreOptionsArgs {
  filter?: Maybe<CoreOptionsFilterInput>
  sort?: Maybe<CoreOptionsSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export interface QueryShopifyProductOptionArgs {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  values?: Maybe<StringQueryOperatorInput>
  shopifyId?: Maybe<StringQueryOperatorInput>
}

export interface QueryAllShopifyProductOptionArgs {
  filter?: Maybe<ShopifyProductOptionFilterInput>
  sort?: Maybe<ShopifyProductOptionSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export interface QueryShopifyProductVariantArgs {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  availableForSale?: Maybe<BooleanQueryOperatorInput>
  image?: Maybe<ShopifyProductVariantImageFilterInput>
  price?: Maybe<StringQueryOperatorInput>
  priceV2?: Maybe<ShopifyProductVariantPriceV2FilterInput>
  requiresShipping?: Maybe<BooleanQueryOperatorInput>
  selectedOptions?: Maybe<ShopifyProductVariantSelectedOptionsFilterListInput>
  sku?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  weight?: Maybe<FloatQueryOperatorInput>
  weightUnit?: Maybe<StringQueryOperatorInput>
  presentmentPrices?: Maybe<ShopifyProductVariantPresentmentPricesFilterInput>
  shopifyId?: Maybe<StringQueryOperatorInput>
  product?: Maybe<ShopifyProductFilterInput>
}

export interface QueryAllShopifyProductVariantArgs {
  filter?: Maybe<ShopifyProductVariantFilterInput>
  sort?: Maybe<ShopifyProductVariantSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export interface QueryShopifyProductArgs {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  availableForSale?: Maybe<BooleanQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  descriptionHtml?: Maybe<StringQueryOperatorInput>
  handle?: Maybe<StringQueryOperatorInput>
  images?: Maybe<ShopifyProductImagesFilterListInput>
  priceRange?: Maybe<ShopifyProductPriceRangeFilterInput>
  productType?: Maybe<StringQueryOperatorInput>
  publishedAt?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  vendor?: Maybe<StringQueryOperatorInput>
  shopifyId?: Maybe<StringQueryOperatorInput>
  variants?: Maybe<ShopifyProductVariantFilterListInput>
  options?: Maybe<ShopifyProductOptionFilterListInput>
}

export interface QueryAllShopifyProductArgs {
  filter?: Maybe<ShopifyProductFilterInput>
  sort?: Maybe<ShopifyProductSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export interface QueryShopifyCollectionArgs {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  description?: Maybe<StringQueryOperatorInput>
  descriptionHtml?: Maybe<StringQueryOperatorInput>
  handle?: Maybe<StringQueryOperatorInput>
  image?: Maybe<ShopifyCollectionImageFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  shopifyId?: Maybe<StringQueryOperatorInput>
  products?: Maybe<ShopifyProductFilterListInput>
}

export interface QueryAllShopifyCollectionArgs {
  filter?: Maybe<ShopifyCollectionFilterInput>
  sort?: Maybe<ShopifyCollectionSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export interface QueryShopifyShopArgs {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  moneyFormat?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
}

export interface QueryAllShopifyShopArgs {
  filter?: Maybe<ShopifyShopFilterInput>
  sort?: Maybe<ShopifyShopSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export interface QueryShopifyShopPolicyArgs {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  body?: Maybe<StringQueryOperatorInput>
  handle?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  shopifyId?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export interface QueryAllShopifyShopPolicyArgs {
  filter?: Maybe<ShopifyShopPolicyFilterInput>
  sort?: Maybe<ShopifyShopPolicySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export interface QuerySiteBuildMetadataArgs {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export interface QueryAllSiteBuildMetadataArgs {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export interface QuerySitePluginArgs {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export interface QueryAllSitePluginArgs {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type ShopifyCollection = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Node[]
  internal: Internal
  description?: Maybe<Scalars['String']>
  descriptionHtml?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  image?: Maybe<ShopifyCollectionImage>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
  shopifyId?: Maybe<Scalars['String']>
  products?: Maybe<Array<Maybe<ShopifyProduct>>>
}

export interface ShopifyCollectionUpdatedAtArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface ShopifyCollectionConnection {
  totalCount: Scalars['Int']
  edges: ShopifyCollectionEdge[]
  nodes: ShopifyCollection[]
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: ShopifyCollectionGroupConnection[]
}

export interface ShopifyCollectionConnectionDistinctArgs {
  field: ShopifyCollectionFieldsEnum
}

export interface ShopifyCollectionConnectionGroupArgs {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ShopifyCollectionFieldsEnum
}

export interface ShopifyCollectionEdge {
  next?: Maybe<ShopifyCollection>
  node: ShopifyCollection
  previous?: Maybe<ShopifyCollection>
}

export type ShopifyCollectionFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'description'
  | 'descriptionHtml'
  | 'handle'
  | 'image___id'
  | 'image___src'
  | 'image___localFile___sourceInstanceName'
  | 'image___localFile___absolutePath'
  | 'image___localFile___relativePath'
  | 'image___localFile___extension'
  | 'image___localFile___size'
  | 'image___localFile___prettySize'
  | 'image___localFile___modifiedTime'
  | 'image___localFile___accessTime'
  | 'image___localFile___changeTime'
  | 'image___localFile___birthTime'
  | 'image___localFile___root'
  | 'image___localFile___dir'
  | 'image___localFile___base'
  | 'image___localFile___ext'
  | 'image___localFile___name'
  | 'image___localFile___relativeDirectory'
  | 'image___localFile___dev'
  | 'image___localFile___mode'
  | 'image___localFile___nlink'
  | 'image___localFile___uid'
  | 'image___localFile___gid'
  | 'image___localFile___rdev'
  | 'image___localFile___ino'
  | 'image___localFile___atimeMs'
  | 'image___localFile___mtimeMs'
  | 'image___localFile___ctimeMs'
  | 'image___localFile___atime'
  | 'image___localFile___mtime'
  | 'image___localFile___ctime'
  | 'image___localFile___birthtime'
  | 'image___localFile___birthtimeMs'
  | 'image___localFile___blksize'
  | 'image___localFile___blocks'
  | 'image___localFile___url'
  | 'image___localFile___publicURL'
  | 'image___localFile___childImageSharp___id'
  | 'image___localFile___childImageSharp___children'
  | 'image___localFile___id'
  | 'image___localFile___parent___id'
  | 'image___localFile___parent___children'
  | 'image___localFile___children'
  | 'image___localFile___children___id'
  | 'image___localFile___children___children'
  | 'image___localFile___internal___content'
  | 'image___localFile___internal___contentDigest'
  | 'image___localFile___internal___description'
  | 'image___localFile___internal___fieldOwners'
  | 'image___localFile___internal___ignoreType'
  | 'image___localFile___internal___mediaType'
  | 'image___localFile___internal___owner'
  | 'image___localFile___internal___type'
  | 'title'
  | 'updatedAt'
  | 'shopifyId'
  | 'products'
  | 'products___id'
  | 'products___parent___id'
  | 'products___parent___parent___id'
  | 'products___parent___parent___children'
  | 'products___parent___children'
  | 'products___parent___children___id'
  | 'products___parent___children___children'
  | 'products___parent___internal___content'
  | 'products___parent___internal___contentDigest'
  | 'products___parent___internal___description'
  | 'products___parent___internal___fieldOwners'
  | 'products___parent___internal___ignoreType'
  | 'products___parent___internal___mediaType'
  | 'products___parent___internal___owner'
  | 'products___parent___internal___type'
  | 'products___children'
  | 'products___children___id'
  | 'products___children___parent___id'
  | 'products___children___parent___children'
  | 'products___children___children'
  | 'products___children___children___id'
  | 'products___children___children___children'
  | 'products___children___internal___content'
  | 'products___children___internal___contentDigest'
  | 'products___children___internal___description'
  | 'products___children___internal___fieldOwners'
  | 'products___children___internal___ignoreType'
  | 'products___children___internal___mediaType'
  | 'products___children___internal___owner'
  | 'products___children___internal___type'
  | 'products___internal___content'
  | 'products___internal___contentDigest'
  | 'products___internal___description'
  | 'products___internal___fieldOwners'
  | 'products___internal___ignoreType'
  | 'products___internal___mediaType'
  | 'products___internal___owner'
  | 'products___internal___type'
  | 'products___availableForSale'
  | 'products___createdAt'
  | 'products___description'
  | 'products___descriptionHtml'
  | 'products___handle'
  | 'products___images'
  | 'products___images___id'
  | 'products___images___altText'
  | 'products___images___originalSrc'
  | 'products___images___localFile___sourceInstanceName'
  | 'products___images___localFile___absolutePath'
  | 'products___images___localFile___relativePath'
  | 'products___images___localFile___extension'
  | 'products___images___localFile___size'
  | 'products___images___localFile___prettySize'
  | 'products___images___localFile___modifiedTime'
  | 'products___images___localFile___accessTime'
  | 'products___images___localFile___changeTime'
  | 'products___images___localFile___birthTime'
  | 'products___images___localFile___root'
  | 'products___images___localFile___dir'
  | 'products___images___localFile___base'
  | 'products___images___localFile___ext'
  | 'products___images___localFile___name'
  | 'products___images___localFile___relativeDirectory'
  | 'products___images___localFile___dev'
  | 'products___images___localFile___mode'
  | 'products___images___localFile___nlink'
  | 'products___images___localFile___uid'
  | 'products___images___localFile___gid'
  | 'products___images___localFile___rdev'
  | 'products___images___localFile___ino'
  | 'products___images___localFile___atimeMs'
  | 'products___images___localFile___mtimeMs'
  | 'products___images___localFile___ctimeMs'
  | 'products___images___localFile___atime'
  | 'products___images___localFile___mtime'
  | 'products___images___localFile___ctime'
  | 'products___images___localFile___birthtime'
  | 'products___images___localFile___birthtimeMs'
  | 'products___images___localFile___blksize'
  | 'products___images___localFile___blocks'
  | 'products___images___localFile___url'
  | 'products___images___localFile___publicURL'
  | 'products___images___localFile___id'
  | 'products___images___localFile___children'
  | 'products___priceRange___minVariantPrice___amount'
  | 'products___priceRange___minVariantPrice___currencyCode'
  | 'products___priceRange___maxVariantPrice___amount'
  | 'products___priceRange___maxVariantPrice___currencyCode'
  | 'products___productType'
  | 'products___publishedAt'
  | 'products___tags'
  | 'products___title'
  | 'products___updatedAt'
  | 'products___vendor'
  | 'products___shopifyId'
  | 'products___variants'
  | 'products___variants___id'
  | 'products___variants___parent___id'
  | 'products___variants___parent___children'
  | 'products___variants___children'
  | 'products___variants___children___id'
  | 'products___variants___children___children'
  | 'products___variants___internal___content'
  | 'products___variants___internal___contentDigest'
  | 'products___variants___internal___description'
  | 'products___variants___internal___fieldOwners'
  | 'products___variants___internal___ignoreType'
  | 'products___variants___internal___mediaType'
  | 'products___variants___internal___owner'
  | 'products___variants___internal___type'
  | 'products___variants___availableForSale'
  | 'products___variants___image___altText'
  | 'products___variants___image___id'
  | 'products___variants___image___originalSrc'
  | 'products___variants___price'
  | 'products___variants___priceV2___amount'
  | 'products___variants___priceV2___currencyCode'
  | 'products___variants___requiresShipping'
  | 'products___variants___selectedOptions'
  | 'products___variants___selectedOptions___name'
  | 'products___variants___selectedOptions___value'
  | 'products___variants___sku'
  | 'products___variants___title'
  | 'products___variants___weight'
  | 'products___variants___weightUnit'
  | 'products___variants___presentmentPrices___edges'
  | 'products___variants___shopifyId'
  | 'products___variants___product___id'
  | 'products___variants___product___children'
  | 'products___variants___product___availableForSale'
  | 'products___variants___product___createdAt'
  | 'products___variants___product___description'
  | 'products___variants___product___descriptionHtml'
  | 'products___variants___product___handle'
  | 'products___variants___product___images'
  | 'products___variants___product___productType'
  | 'products___variants___product___publishedAt'
  | 'products___variants___product___tags'
  | 'products___variants___product___title'
  | 'products___variants___product___updatedAt'
  | 'products___variants___product___vendor'
  | 'products___variants___product___shopifyId'
  | 'products___variants___product___variants'
  | 'products___variants___product___options'
  | 'products___options'
  | 'products___options___id'
  | 'products___options___parent___id'
  | 'products___options___parent___children'
  | 'products___options___children'
  | 'products___options___children___id'
  | 'products___options___children___children'
  | 'products___options___internal___content'
  | 'products___options___internal___contentDigest'
  | 'products___options___internal___description'
  | 'products___options___internal___fieldOwners'
  | 'products___options___internal___ignoreType'
  | 'products___options___internal___mediaType'
  | 'products___options___internal___owner'
  | 'products___options___internal___type'
  | 'products___options___name'
  | 'products___options___values'
  | 'products___options___shopifyId'

export interface ShopifyCollectionFilterInput {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  description?: Maybe<StringQueryOperatorInput>
  descriptionHtml?: Maybe<StringQueryOperatorInput>
  handle?: Maybe<StringQueryOperatorInput>
  image?: Maybe<ShopifyCollectionImageFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  shopifyId?: Maybe<StringQueryOperatorInput>
  products?: Maybe<ShopifyProductFilterListInput>
}

export interface ShopifyCollectionGroupConnection {
  totalCount: Scalars['Int']
  edges: ShopifyCollectionEdge[]
  nodes: ShopifyCollection[]
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export interface ShopifyCollectionImage {
  id?: Maybe<Scalars['String']>
  src?: Maybe<Scalars['String']>
  localFile?: Maybe<File>
}

export interface ShopifyCollectionImageFilterInput {
  id?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  localFile?: Maybe<FileFilterInput>
}

export interface ShopifyCollectionSortInput {
  fields?: Maybe<Array<Maybe<ShopifyCollectionFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ShopifyProduct = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Node[]
  internal: Internal
  availableForSale?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['Date']>
  description?: Maybe<Scalars['String']>
  descriptionHtml?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  images?: Maybe<Array<Maybe<ShopifyProductImages>>>
  priceRange?: Maybe<ShopifyProductPriceRange>
  productType?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['Date']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
  vendor?: Maybe<Scalars['String']>
  shopifyId?: Maybe<Scalars['String']>
  variants?: Maybe<Array<Maybe<ShopifyProductVariant>>>
  options?: Maybe<Array<Maybe<ShopifyProductOption>>>
}

export interface ShopifyProductCreatedAtArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface ShopifyProductPublishedAtArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface ShopifyProductUpdatedAtArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface ShopifyProductConnection {
  totalCount: Scalars['Int']
  edges: ShopifyProductEdge[]
  nodes: ShopifyProduct[]
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: ShopifyProductGroupConnection[]
}

export interface ShopifyProductConnectionDistinctArgs {
  field: ShopifyProductFieldsEnum
}

export interface ShopifyProductConnectionGroupArgs {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ShopifyProductFieldsEnum
}

export interface ShopifyProductEdge {
  next?: Maybe<ShopifyProduct>
  node: ShopifyProduct
  previous?: Maybe<ShopifyProduct>
}

export type ShopifyProductFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'availableForSale'
  | 'createdAt'
  | 'description'
  | 'descriptionHtml'
  | 'handle'
  | 'images'
  | 'images___id'
  | 'images___altText'
  | 'images___originalSrc'
  | 'images___localFile___sourceInstanceName'
  | 'images___localFile___absolutePath'
  | 'images___localFile___relativePath'
  | 'images___localFile___extension'
  | 'images___localFile___size'
  | 'images___localFile___prettySize'
  | 'images___localFile___modifiedTime'
  | 'images___localFile___accessTime'
  | 'images___localFile___changeTime'
  | 'images___localFile___birthTime'
  | 'images___localFile___root'
  | 'images___localFile___dir'
  | 'images___localFile___base'
  | 'images___localFile___ext'
  | 'images___localFile___name'
  | 'images___localFile___relativeDirectory'
  | 'images___localFile___dev'
  | 'images___localFile___mode'
  | 'images___localFile___nlink'
  | 'images___localFile___uid'
  | 'images___localFile___gid'
  | 'images___localFile___rdev'
  | 'images___localFile___ino'
  | 'images___localFile___atimeMs'
  | 'images___localFile___mtimeMs'
  | 'images___localFile___ctimeMs'
  | 'images___localFile___atime'
  | 'images___localFile___mtime'
  | 'images___localFile___ctime'
  | 'images___localFile___birthtime'
  | 'images___localFile___birthtimeMs'
  | 'images___localFile___blksize'
  | 'images___localFile___blocks'
  | 'images___localFile___url'
  | 'images___localFile___publicURL'
  | 'images___localFile___childImageSharp___id'
  | 'images___localFile___childImageSharp___children'
  | 'images___localFile___id'
  | 'images___localFile___parent___id'
  | 'images___localFile___parent___children'
  | 'images___localFile___children'
  | 'images___localFile___children___id'
  | 'images___localFile___children___children'
  | 'images___localFile___internal___content'
  | 'images___localFile___internal___contentDigest'
  | 'images___localFile___internal___description'
  | 'images___localFile___internal___fieldOwners'
  | 'images___localFile___internal___ignoreType'
  | 'images___localFile___internal___mediaType'
  | 'images___localFile___internal___owner'
  | 'images___localFile___internal___type'
  | 'priceRange___minVariantPrice___amount'
  | 'priceRange___minVariantPrice___currencyCode'
  | 'priceRange___maxVariantPrice___amount'
  | 'priceRange___maxVariantPrice___currencyCode'
  | 'productType'
  | 'publishedAt'
  | 'tags'
  | 'title'
  | 'updatedAt'
  | 'vendor'
  | 'shopifyId'
  | 'variants'
  | 'variants___id'
  | 'variants___parent___id'
  | 'variants___parent___parent___id'
  | 'variants___parent___parent___children'
  | 'variants___parent___children'
  | 'variants___parent___children___id'
  | 'variants___parent___children___children'
  | 'variants___parent___internal___content'
  | 'variants___parent___internal___contentDigest'
  | 'variants___parent___internal___description'
  | 'variants___parent___internal___fieldOwners'
  | 'variants___parent___internal___ignoreType'
  | 'variants___parent___internal___mediaType'
  | 'variants___parent___internal___owner'
  | 'variants___parent___internal___type'
  | 'variants___children'
  | 'variants___children___id'
  | 'variants___children___parent___id'
  | 'variants___children___parent___children'
  | 'variants___children___children'
  | 'variants___children___children___id'
  | 'variants___children___children___children'
  | 'variants___children___internal___content'
  | 'variants___children___internal___contentDigest'
  | 'variants___children___internal___description'
  | 'variants___children___internal___fieldOwners'
  | 'variants___children___internal___ignoreType'
  | 'variants___children___internal___mediaType'
  | 'variants___children___internal___owner'
  | 'variants___children___internal___type'
  | 'variants___internal___content'
  | 'variants___internal___contentDigest'
  | 'variants___internal___description'
  | 'variants___internal___fieldOwners'
  | 'variants___internal___ignoreType'
  | 'variants___internal___mediaType'
  | 'variants___internal___owner'
  | 'variants___internal___type'
  | 'variants___availableForSale'
  | 'variants___image___altText'
  | 'variants___image___id'
  | 'variants___image___originalSrc'
  | 'variants___image___localFile___sourceInstanceName'
  | 'variants___image___localFile___absolutePath'
  | 'variants___image___localFile___relativePath'
  | 'variants___image___localFile___extension'
  | 'variants___image___localFile___size'
  | 'variants___image___localFile___prettySize'
  | 'variants___image___localFile___modifiedTime'
  | 'variants___image___localFile___accessTime'
  | 'variants___image___localFile___changeTime'
  | 'variants___image___localFile___birthTime'
  | 'variants___image___localFile___root'
  | 'variants___image___localFile___dir'
  | 'variants___image___localFile___base'
  | 'variants___image___localFile___ext'
  | 'variants___image___localFile___name'
  | 'variants___image___localFile___relativeDirectory'
  | 'variants___image___localFile___dev'
  | 'variants___image___localFile___mode'
  | 'variants___image___localFile___nlink'
  | 'variants___image___localFile___uid'
  | 'variants___image___localFile___gid'
  | 'variants___image___localFile___rdev'
  | 'variants___image___localFile___ino'
  | 'variants___image___localFile___atimeMs'
  | 'variants___image___localFile___mtimeMs'
  | 'variants___image___localFile___ctimeMs'
  | 'variants___image___localFile___atime'
  | 'variants___image___localFile___mtime'
  | 'variants___image___localFile___ctime'
  | 'variants___image___localFile___birthtime'
  | 'variants___image___localFile___birthtimeMs'
  | 'variants___image___localFile___blksize'
  | 'variants___image___localFile___blocks'
  | 'variants___image___localFile___url'
  | 'variants___image___localFile___publicURL'
  | 'variants___image___localFile___id'
  | 'variants___image___localFile___children'
  | 'variants___price'
  | 'variants___priceV2___amount'
  | 'variants___priceV2___currencyCode'
  | 'variants___requiresShipping'
  | 'variants___selectedOptions'
  | 'variants___selectedOptions___name'
  | 'variants___selectedOptions___value'
  | 'variants___sku'
  | 'variants___title'
  | 'variants___weight'
  | 'variants___weightUnit'
  | 'variants___presentmentPrices___edges'
  | 'variants___shopifyId'
  | 'variants___product___id'
  | 'variants___product___parent___id'
  | 'variants___product___parent___children'
  | 'variants___product___children'
  | 'variants___product___children___id'
  | 'variants___product___children___children'
  | 'variants___product___internal___content'
  | 'variants___product___internal___contentDigest'
  | 'variants___product___internal___description'
  | 'variants___product___internal___fieldOwners'
  | 'variants___product___internal___ignoreType'
  | 'variants___product___internal___mediaType'
  | 'variants___product___internal___owner'
  | 'variants___product___internal___type'
  | 'variants___product___availableForSale'
  | 'variants___product___createdAt'
  | 'variants___product___description'
  | 'variants___product___descriptionHtml'
  | 'variants___product___handle'
  | 'variants___product___images'
  | 'variants___product___images___id'
  | 'variants___product___images___altText'
  | 'variants___product___images___originalSrc'
  | 'variants___product___productType'
  | 'variants___product___publishedAt'
  | 'variants___product___tags'
  | 'variants___product___title'
  | 'variants___product___updatedAt'
  | 'variants___product___vendor'
  | 'variants___product___shopifyId'
  | 'variants___product___variants'
  | 'variants___product___variants___id'
  | 'variants___product___variants___children'
  | 'variants___product___variants___availableForSale'
  | 'variants___product___variants___price'
  | 'variants___product___variants___requiresShipping'
  | 'variants___product___variants___selectedOptions'
  | 'variants___product___variants___sku'
  | 'variants___product___variants___title'
  | 'variants___product___variants___weight'
  | 'variants___product___variants___weightUnit'
  | 'variants___product___variants___shopifyId'
  | 'variants___product___options'
  | 'variants___product___options___id'
  | 'variants___product___options___children'
  | 'variants___product___options___name'
  | 'variants___product___options___values'
  | 'variants___product___options___shopifyId'
  | 'options'
  | 'options___id'
  | 'options___parent___id'
  | 'options___parent___parent___id'
  | 'options___parent___parent___children'
  | 'options___parent___children'
  | 'options___parent___children___id'
  | 'options___parent___children___children'
  | 'options___parent___internal___content'
  | 'options___parent___internal___contentDigest'
  | 'options___parent___internal___description'
  | 'options___parent___internal___fieldOwners'
  | 'options___parent___internal___ignoreType'
  | 'options___parent___internal___mediaType'
  | 'options___parent___internal___owner'
  | 'options___parent___internal___type'
  | 'options___children'
  | 'options___children___id'
  | 'options___children___parent___id'
  | 'options___children___parent___children'
  | 'options___children___children'
  | 'options___children___children___id'
  | 'options___children___children___children'
  | 'options___children___internal___content'
  | 'options___children___internal___contentDigest'
  | 'options___children___internal___description'
  | 'options___children___internal___fieldOwners'
  | 'options___children___internal___ignoreType'
  | 'options___children___internal___mediaType'
  | 'options___children___internal___owner'
  | 'options___children___internal___type'
  | 'options___internal___content'
  | 'options___internal___contentDigest'
  | 'options___internal___description'
  | 'options___internal___fieldOwners'
  | 'options___internal___ignoreType'
  | 'options___internal___mediaType'
  | 'options___internal___owner'
  | 'options___internal___type'
  | 'options___name'
  | 'options___values'
  | 'options___shopifyId'

export interface ShopifyProductFilterInput {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  availableForSale?: Maybe<BooleanQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  descriptionHtml?: Maybe<StringQueryOperatorInput>
  handle?: Maybe<StringQueryOperatorInput>
  images?: Maybe<ShopifyProductImagesFilterListInput>
  priceRange?: Maybe<ShopifyProductPriceRangeFilterInput>
  productType?: Maybe<StringQueryOperatorInput>
  publishedAt?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  vendor?: Maybe<StringQueryOperatorInput>
  shopifyId?: Maybe<StringQueryOperatorInput>
  variants?: Maybe<ShopifyProductVariantFilterListInput>
  options?: Maybe<ShopifyProductOptionFilterListInput>
}

export interface ShopifyProductFilterListInput {
  elemMatch?: Maybe<ShopifyProductFilterInput>
}

export interface ShopifyProductGroupConnection {
  totalCount: Scalars['Int']
  edges: ShopifyProductEdge[]
  nodes: ShopifyProduct[]
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export interface ShopifyProductImages {
  id?: Maybe<Scalars['String']>
  altText?: Maybe<Scalars['String']>
  originalSrc?: Maybe<Scalars['String']>
  localFile?: Maybe<File>
}

export interface ShopifyProductImagesFilterInput {
  id?: Maybe<StringQueryOperatorInput>
  altText?: Maybe<StringQueryOperatorInput>
  originalSrc?: Maybe<StringQueryOperatorInput>
  localFile?: Maybe<FileFilterInput>
}

export interface ShopifyProductImagesFilterListInput {
  elemMatch?: Maybe<ShopifyProductImagesFilterInput>
}

export type ShopifyProductOption = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Node[]
  internal: Internal
  name?: Maybe<Scalars['String']>
  values?: Maybe<Array<Maybe<Scalars['String']>>>
  shopifyId?: Maybe<Scalars['String']>
}

export interface ShopifyProductOptionConnection {
  totalCount: Scalars['Int']
  edges: ShopifyProductOptionEdge[]
  nodes: ShopifyProductOption[]
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: ShopifyProductOptionGroupConnection[]
}

export interface ShopifyProductOptionConnectionDistinctArgs {
  field: ShopifyProductOptionFieldsEnum
}

export interface ShopifyProductOptionConnectionGroupArgs {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ShopifyProductOptionFieldsEnum
}

export interface ShopifyProductOptionEdge {
  next?: Maybe<ShopifyProductOption>
  node: ShopifyProductOption
  previous?: Maybe<ShopifyProductOption>
}

export type ShopifyProductOptionFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'values'
  | 'shopifyId'

export interface ShopifyProductOptionFilterInput {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  values?: Maybe<StringQueryOperatorInput>
  shopifyId?: Maybe<StringQueryOperatorInput>
}

export interface ShopifyProductOptionFilterListInput {
  elemMatch?: Maybe<ShopifyProductOptionFilterInput>
}

export interface ShopifyProductOptionGroupConnection {
  totalCount: Scalars['Int']
  edges: ShopifyProductOptionEdge[]
  nodes: ShopifyProductOption[]
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export interface ShopifyProductOptionSortInput {
  fields?: Maybe<Array<Maybe<ShopifyProductOptionFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export interface ShopifyProductPriceRange {
  minVariantPrice?: Maybe<ShopifyProductPriceRangeMinVariantPrice>
  maxVariantPrice?: Maybe<ShopifyProductPriceRangeMaxVariantPrice>
}

export interface ShopifyProductPriceRangeFilterInput {
  minVariantPrice?: Maybe<ShopifyProductPriceRangeMinVariantPriceFilterInput>
  maxVariantPrice?: Maybe<ShopifyProductPriceRangeMaxVariantPriceFilterInput>
}

export interface ShopifyProductPriceRangeMaxVariantPrice {
  amount?: Maybe<Scalars['String']>
  currencyCode?: Maybe<Scalars['String']>
}

export interface ShopifyProductPriceRangeMaxVariantPriceFilterInput {
  amount?: Maybe<StringQueryOperatorInput>
  currencyCode?: Maybe<StringQueryOperatorInput>
}

export interface ShopifyProductPriceRangeMinVariantPrice {
  amount?: Maybe<Scalars['String']>
  currencyCode?: Maybe<Scalars['String']>
}

export interface ShopifyProductPriceRangeMinVariantPriceFilterInput {
  amount?: Maybe<StringQueryOperatorInput>
  currencyCode?: Maybe<StringQueryOperatorInput>
}

export interface ShopifyProductSortInput {
  fields?: Maybe<Array<Maybe<ShopifyProductFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ShopifyProductVariant = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Node[]
  internal: Internal
  availableForSale?: Maybe<Scalars['Boolean']>
  image?: Maybe<ShopifyProductVariantImage>
  price?: Maybe<Scalars['String']>
  priceV2?: Maybe<ShopifyProductVariantPriceV2>
  requiresShipping?: Maybe<Scalars['Boolean']>
  selectedOptions?: Maybe<Array<Maybe<ShopifyProductVariantSelectedOptions>>>
  sku?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  weight?: Maybe<Scalars['Float']>
  weightUnit?: Maybe<Scalars['String']>
  presentmentPrices?: Maybe<ShopifyProductVariantPresentmentPrices>
  shopifyId?: Maybe<Scalars['String']>
  product?: Maybe<ShopifyProduct>
}

export interface ShopifyProductVariantConnection {
  totalCount: Scalars['Int']
  edges: ShopifyProductVariantEdge[]
  nodes: ShopifyProductVariant[]
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: ShopifyProductVariantGroupConnection[]
}

export interface ShopifyProductVariantConnectionDistinctArgs {
  field: ShopifyProductVariantFieldsEnum
}

export interface ShopifyProductVariantConnectionGroupArgs {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ShopifyProductVariantFieldsEnum
}

export interface ShopifyProductVariantEdge {
  next?: Maybe<ShopifyProductVariant>
  node: ShopifyProductVariant
  previous?: Maybe<ShopifyProductVariant>
}

export type ShopifyProductVariantFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'availableForSale'
  | 'image___altText'
  | 'image___id'
  | 'image___originalSrc'
  | 'image___localFile___sourceInstanceName'
  | 'image___localFile___absolutePath'
  | 'image___localFile___relativePath'
  | 'image___localFile___extension'
  | 'image___localFile___size'
  | 'image___localFile___prettySize'
  | 'image___localFile___modifiedTime'
  | 'image___localFile___accessTime'
  | 'image___localFile___changeTime'
  | 'image___localFile___birthTime'
  | 'image___localFile___root'
  | 'image___localFile___dir'
  | 'image___localFile___base'
  | 'image___localFile___ext'
  | 'image___localFile___name'
  | 'image___localFile___relativeDirectory'
  | 'image___localFile___dev'
  | 'image___localFile___mode'
  | 'image___localFile___nlink'
  | 'image___localFile___uid'
  | 'image___localFile___gid'
  | 'image___localFile___rdev'
  | 'image___localFile___ino'
  | 'image___localFile___atimeMs'
  | 'image___localFile___mtimeMs'
  | 'image___localFile___ctimeMs'
  | 'image___localFile___atime'
  | 'image___localFile___mtime'
  | 'image___localFile___ctime'
  | 'image___localFile___birthtime'
  | 'image___localFile___birthtimeMs'
  | 'image___localFile___blksize'
  | 'image___localFile___blocks'
  | 'image___localFile___url'
  | 'image___localFile___publicURL'
  | 'image___localFile___childImageSharp___id'
  | 'image___localFile___childImageSharp___children'
  | 'image___localFile___id'
  | 'image___localFile___parent___id'
  | 'image___localFile___parent___children'
  | 'image___localFile___children'
  | 'image___localFile___children___id'
  | 'image___localFile___children___children'
  | 'image___localFile___internal___content'
  | 'image___localFile___internal___contentDigest'
  | 'image___localFile___internal___description'
  | 'image___localFile___internal___fieldOwners'
  | 'image___localFile___internal___ignoreType'
  | 'image___localFile___internal___mediaType'
  | 'image___localFile___internal___owner'
  | 'image___localFile___internal___type'
  | 'price'
  | 'priceV2___amount'
  | 'priceV2___currencyCode'
  | 'requiresShipping'
  | 'selectedOptions'
  | 'selectedOptions___name'
  | 'selectedOptions___value'
  | 'sku'
  | 'title'
  | 'weight'
  | 'weightUnit'
  | 'presentmentPrices___edges'
  | 'shopifyId'
  | 'product___id'
  | 'product___parent___id'
  | 'product___parent___parent___id'
  | 'product___parent___parent___children'
  | 'product___parent___children'
  | 'product___parent___children___id'
  | 'product___parent___children___children'
  | 'product___parent___internal___content'
  | 'product___parent___internal___contentDigest'
  | 'product___parent___internal___description'
  | 'product___parent___internal___fieldOwners'
  | 'product___parent___internal___ignoreType'
  | 'product___parent___internal___mediaType'
  | 'product___parent___internal___owner'
  | 'product___parent___internal___type'
  | 'product___children'
  | 'product___children___id'
  | 'product___children___parent___id'
  | 'product___children___parent___children'
  | 'product___children___children'
  | 'product___children___children___id'
  | 'product___children___children___children'
  | 'product___children___internal___content'
  | 'product___children___internal___contentDigest'
  | 'product___children___internal___description'
  | 'product___children___internal___fieldOwners'
  | 'product___children___internal___ignoreType'
  | 'product___children___internal___mediaType'
  | 'product___children___internal___owner'
  | 'product___children___internal___type'
  | 'product___internal___content'
  | 'product___internal___contentDigest'
  | 'product___internal___description'
  | 'product___internal___fieldOwners'
  | 'product___internal___ignoreType'
  | 'product___internal___mediaType'
  | 'product___internal___owner'
  | 'product___internal___type'
  | 'product___availableForSale'
  | 'product___createdAt'
  | 'product___description'
  | 'product___descriptionHtml'
  | 'product___handle'
  | 'product___images'
  | 'product___images___id'
  | 'product___images___altText'
  | 'product___images___originalSrc'
  | 'product___images___localFile___sourceInstanceName'
  | 'product___images___localFile___absolutePath'
  | 'product___images___localFile___relativePath'
  | 'product___images___localFile___extension'
  | 'product___images___localFile___size'
  | 'product___images___localFile___prettySize'
  | 'product___images___localFile___modifiedTime'
  | 'product___images___localFile___accessTime'
  | 'product___images___localFile___changeTime'
  | 'product___images___localFile___birthTime'
  | 'product___images___localFile___root'
  | 'product___images___localFile___dir'
  | 'product___images___localFile___base'
  | 'product___images___localFile___ext'
  | 'product___images___localFile___name'
  | 'product___images___localFile___relativeDirectory'
  | 'product___images___localFile___dev'
  | 'product___images___localFile___mode'
  | 'product___images___localFile___nlink'
  | 'product___images___localFile___uid'
  | 'product___images___localFile___gid'
  | 'product___images___localFile___rdev'
  | 'product___images___localFile___ino'
  | 'product___images___localFile___atimeMs'
  | 'product___images___localFile___mtimeMs'
  | 'product___images___localFile___ctimeMs'
  | 'product___images___localFile___atime'
  | 'product___images___localFile___mtime'
  | 'product___images___localFile___ctime'
  | 'product___images___localFile___birthtime'
  | 'product___images___localFile___birthtimeMs'
  | 'product___images___localFile___blksize'
  | 'product___images___localFile___blocks'
  | 'product___images___localFile___url'
  | 'product___images___localFile___publicURL'
  | 'product___images___localFile___id'
  | 'product___images___localFile___children'
  | 'product___priceRange___minVariantPrice___amount'
  | 'product___priceRange___minVariantPrice___currencyCode'
  | 'product___priceRange___maxVariantPrice___amount'
  | 'product___priceRange___maxVariantPrice___currencyCode'
  | 'product___productType'
  | 'product___publishedAt'
  | 'product___tags'
  | 'product___title'
  | 'product___updatedAt'
  | 'product___vendor'
  | 'product___shopifyId'
  | 'product___variants'
  | 'product___variants___id'
  | 'product___variants___parent___id'
  | 'product___variants___parent___children'
  | 'product___variants___children'
  | 'product___variants___children___id'
  | 'product___variants___children___children'
  | 'product___variants___internal___content'
  | 'product___variants___internal___contentDigest'
  | 'product___variants___internal___description'
  | 'product___variants___internal___fieldOwners'
  | 'product___variants___internal___ignoreType'
  | 'product___variants___internal___mediaType'
  | 'product___variants___internal___owner'
  | 'product___variants___internal___type'
  | 'product___variants___availableForSale'
  | 'product___variants___image___altText'
  | 'product___variants___image___id'
  | 'product___variants___image___originalSrc'
  | 'product___variants___price'
  | 'product___variants___priceV2___amount'
  | 'product___variants___priceV2___currencyCode'
  | 'product___variants___requiresShipping'
  | 'product___variants___selectedOptions'
  | 'product___variants___selectedOptions___name'
  | 'product___variants___selectedOptions___value'
  | 'product___variants___sku'
  | 'product___variants___title'
  | 'product___variants___weight'
  | 'product___variants___weightUnit'
  | 'product___variants___presentmentPrices___edges'
  | 'product___variants___shopifyId'
  | 'product___variants___product___id'
  | 'product___variants___product___children'
  | 'product___variants___product___availableForSale'
  | 'product___variants___product___createdAt'
  | 'product___variants___product___description'
  | 'product___variants___product___descriptionHtml'
  | 'product___variants___product___handle'
  | 'product___variants___product___images'
  | 'product___variants___product___productType'
  | 'product___variants___product___publishedAt'
  | 'product___variants___product___tags'
  | 'product___variants___product___title'
  | 'product___variants___product___updatedAt'
  | 'product___variants___product___vendor'
  | 'product___variants___product___shopifyId'
  | 'product___variants___product___variants'
  | 'product___variants___product___options'
  | 'product___options'
  | 'product___options___id'
  | 'product___options___parent___id'
  | 'product___options___parent___children'
  | 'product___options___children'
  | 'product___options___children___id'
  | 'product___options___children___children'
  | 'product___options___internal___content'
  | 'product___options___internal___contentDigest'
  | 'product___options___internal___description'
  | 'product___options___internal___fieldOwners'
  | 'product___options___internal___ignoreType'
  | 'product___options___internal___mediaType'
  | 'product___options___internal___owner'
  | 'product___options___internal___type'
  | 'product___options___name'
  | 'product___options___values'
  | 'product___options___shopifyId'

export interface ShopifyProductVariantFilterInput {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  availableForSale?: Maybe<BooleanQueryOperatorInput>
  image?: Maybe<ShopifyProductVariantImageFilterInput>
  price?: Maybe<StringQueryOperatorInput>
  priceV2?: Maybe<ShopifyProductVariantPriceV2FilterInput>
  requiresShipping?: Maybe<BooleanQueryOperatorInput>
  selectedOptions?: Maybe<ShopifyProductVariantSelectedOptionsFilterListInput>
  sku?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  weight?: Maybe<FloatQueryOperatorInput>
  weightUnit?: Maybe<StringQueryOperatorInput>
  presentmentPrices?: Maybe<ShopifyProductVariantPresentmentPricesFilterInput>
  shopifyId?: Maybe<StringQueryOperatorInput>
  product?: Maybe<ShopifyProductFilterInput>
}

export interface ShopifyProductVariantFilterListInput {
  elemMatch?: Maybe<ShopifyProductVariantFilterInput>
}

export interface ShopifyProductVariantGroupConnection {
  totalCount: Scalars['Int']
  edges: ShopifyProductVariantEdge[]
  nodes: ShopifyProductVariant[]
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export interface ShopifyProductVariantImage {
  altText?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  originalSrc?: Maybe<Scalars['String']>
  localFile?: Maybe<File>
}

export interface ShopifyProductVariantImageFilterInput {
  altText?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  originalSrc?: Maybe<StringQueryOperatorInput>
  localFile?: Maybe<FileFilterInput>
}

export interface ShopifyProductVariantPresentmentPrices {
  edges?: Maybe<Array<Maybe<ShopifyProductVariantPresentmentPricesEdges>>>
}

export interface ShopifyProductVariantPresentmentPricesEdges {
  node?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNode>
}

export interface ShopifyProductVariantPresentmentPricesEdgesFilterInput {
  node?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNodeFilterInput>
}

export interface ShopifyProductVariantPresentmentPricesEdgesFilterListInput {
  elemMatch?: Maybe<ShopifyProductVariantPresentmentPricesEdgesFilterInput>
}

export interface ShopifyProductVariantPresentmentPricesEdgesNode {
  price?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNodePrice>
}

export interface ShopifyProductVariantPresentmentPricesEdgesNodeFilterInput {
  price?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNodePriceFilterInput>
}

export interface ShopifyProductVariantPresentmentPricesEdgesNodePrice {
  amount?: Maybe<Scalars['String']>
  currencyCode?: Maybe<Scalars['String']>
}

export interface ShopifyProductVariantPresentmentPricesEdgesNodePriceFilterInput {
  amount?: Maybe<StringQueryOperatorInput>
  currencyCode?: Maybe<StringQueryOperatorInput>
}

export interface ShopifyProductVariantPresentmentPricesFilterInput {
  edges?: Maybe<ShopifyProductVariantPresentmentPricesEdgesFilterListInput>
}

export interface ShopifyProductVariantPriceV2 {
  amount?: Maybe<Scalars['String']>
  currencyCode?: Maybe<Scalars['String']>
}

export interface ShopifyProductVariantPriceV2FilterInput {
  amount?: Maybe<StringQueryOperatorInput>
  currencyCode?: Maybe<StringQueryOperatorInput>
}

export interface ShopifyProductVariantSelectedOptions {
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export interface ShopifyProductVariantSelectedOptionsFilterInput {
  name?: Maybe<StringQueryOperatorInput>
  value?: Maybe<StringQueryOperatorInput>
}

export interface ShopifyProductVariantSelectedOptionsFilterListInput {
  elemMatch?: Maybe<ShopifyProductVariantSelectedOptionsFilterInput>
}

export interface ShopifyProductVariantSortInput {
  fields?: Maybe<Array<Maybe<ShopifyProductVariantFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ShopifyShop = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Node[]
  internal: Internal
  moneyFormat?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export interface ShopifyShopConnection {
  totalCount: Scalars['Int']
  edges: ShopifyShopEdge[]
  nodes: ShopifyShop[]
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: ShopifyShopGroupConnection[]
}

export interface ShopifyShopConnectionDistinctArgs {
  field: ShopifyShopFieldsEnum
}

export interface ShopifyShopConnectionGroupArgs {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ShopifyShopFieldsEnum
}

export interface ShopifyShopEdge {
  next?: Maybe<ShopifyShop>
  node: ShopifyShop
  previous?: Maybe<ShopifyShop>
}

export type ShopifyShopFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'moneyFormat'
  | 'name'

export interface ShopifyShopFilterInput {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  moneyFormat?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
}

export interface ShopifyShopGroupConnection {
  totalCount: Scalars['Int']
  edges: ShopifyShopEdge[]
  nodes: ShopifyShop[]
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ShopifyShopPolicy = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Node[]
  internal: Internal
  body?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  shopifyId?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export interface ShopifyShopPolicyConnection {
  totalCount: Scalars['Int']
  edges: ShopifyShopPolicyEdge[]
  nodes: ShopifyShopPolicy[]
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: ShopifyShopPolicyGroupConnection[]
}

export interface ShopifyShopPolicyConnectionDistinctArgs {
  field: ShopifyShopPolicyFieldsEnum
}

export interface ShopifyShopPolicyConnectionGroupArgs {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ShopifyShopPolicyFieldsEnum
}

export interface ShopifyShopPolicyEdge {
  next?: Maybe<ShopifyShopPolicy>
  node: ShopifyShopPolicy
  previous?: Maybe<ShopifyShopPolicy>
}

export type ShopifyShopPolicyFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'body'
  | 'handle'
  | 'title'
  | 'url'
  | 'shopifyId'
  | 'type'

export interface ShopifyShopPolicyFilterInput {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  body?: Maybe<StringQueryOperatorInput>
  handle?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  shopifyId?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export interface ShopifyShopPolicyGroupConnection {
  totalCount: Scalars['Int']
  edges: ShopifyShopPolicyEdge[]
  nodes: ShopifyShopPolicy[]
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export interface ShopifyShopPolicySortInput {
  fields?: Maybe<Array<Maybe<ShopifyShopPolicyFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export interface ShopifyShopSortInput {
  fields?: Maybe<Array<Maybe<ShopifyShopFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Int']>
  host?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  pathPrefix?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Node[]
  internal: Internal
}

export interface SiteBuildTimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Node[]
  internal: Internal
  buildTime?: Maybe<Scalars['Date']>
}

export interface SiteBuildMetadataBuildTimeArgs {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export interface SiteBuildMetadataConnection {
  totalCount: Scalars['Int']
  edges: SiteBuildMetadataEdge[]
  nodes: SiteBuildMetadata[]
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: SiteBuildMetadataGroupConnection[]
}

export interface SiteBuildMetadataConnectionDistinctArgs {
  field: SiteBuildMetadataFieldsEnum
}

export interface SiteBuildMetadataConnectionGroupArgs {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export interface SiteBuildMetadataEdge {
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime'

export interface SiteBuildMetadataFilterInput {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export interface SiteBuildMetadataGroupConnection {
  totalCount: Scalars['Int']
  edges: SiteBuildMetadataEdge[]
  nodes: SiteBuildMetadata[]
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export interface SiteBuildMetadataSortInput {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export interface SiteConnection {
  totalCount: Scalars['Int']
  edges: SiteEdge[]
  nodes: Site[]
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: SiteGroupConnection[]
}

export interface SiteConnectionDistinctArgs {
  field: SiteFieldsEnum
}

export interface SiteConnectionGroupArgs {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export interface SiteEdge {
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export interface SiteFilterInput {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export interface SiteGroupConnection {
  totalCount: Scalars['Int']
  edges: SiteEdge[]
  nodes: Site[]
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
  componentPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Node[]
  internal: Internal
}

export interface SitePageConnection {
  totalCount: Scalars['Int']
  edges: SitePageEdge[]
  nodes: SitePage[]
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: SitePageGroupConnection[]
}

export interface SitePageConnectionDistinctArgs {
  field: SitePageFieldsEnum
}

export interface SitePageConnectionGroupArgs {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export interface SitePageContext {
  shirt?: Maybe<SitePageContextShirt>
  shirts?: Maybe<Array<Maybe<SitePageContextShirts>>>
  currentPage?: Maybe<Scalars['Int']>
  lastPage?: Maybe<Scalars['Int']>
  category?: Maybe<Scalars['String']>
  categorySlug?: Maybe<Scalars['String']>
}

export interface SitePageContextFilterInput {
  shirt?: Maybe<SitePageContextShirtFilterInput>
  shirts?: Maybe<SitePageContextShirtsFilterListInput>
  currentPage?: Maybe<IntQueryOperatorInput>
  lastPage?: Maybe<IntQueryOperatorInput>
  category?: Maybe<StringQueryOperatorInput>
  categorySlug?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextShirt {
  title?: Maybe<Scalars['String']>
  variants?: Maybe<Array<Maybe<SitePageContextShirtVariants>>>
  price?: Maybe<Scalars['Float']>
  category?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  sizes?: Maybe<Array<Maybe<Scalars['String']>>>
  models?: Maybe<Array<Maybe<Scalars['String']>>>
  colors?: Maybe<Array<Maybe<Scalars['String']>>>
  images?: Maybe<Array<Maybe<SitePageContextShirtImages>>>
  sku?: Maybe<Scalars['String']>
}

export interface SitePageContextShirtFilterInput {
  title?: Maybe<StringQueryOperatorInput>
  variants?: Maybe<SitePageContextShirtVariantsFilterListInput>
  price?: Maybe<FloatQueryOperatorInput>
  category?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  models?: Maybe<StringQueryOperatorInput>
  colors?: Maybe<StringQueryOperatorInput>
  images?: Maybe<SitePageContextShirtImagesFilterListInput>
  sku?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextShirtImages {
  base64?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
  srcSet?: Maybe<Scalars['String']>
  sizes?: Maybe<Scalars['String']>
  alt?: Maybe<Scalars['String']>
}

export interface SitePageContextShirtImagesFilterInput {
  base64?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  alt?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextShirtImagesFilterListInput {
  elemMatch?: Maybe<SitePageContextShirtImagesFilterInput>
}

export interface SitePageContextShirts {
  title?: Maybe<Scalars['String']>
  variants?: Maybe<Array<Maybe<SitePageContextShirtsVariants>>>
  price?: Maybe<Scalars['Float']>
  category?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  sizes?: Maybe<Array<Maybe<Scalars['String']>>>
  models?: Maybe<Array<Maybe<Scalars['String']>>>
  colors?: Maybe<Array<Maybe<Scalars['String']>>>
  images?: Maybe<Array<Maybe<SitePageContextShirtsImages>>>
  sku?: Maybe<Scalars['String']>
}

export interface SitePageContextShirtsFilterInput {
  title?: Maybe<StringQueryOperatorInput>
  variants?: Maybe<SitePageContextShirtsVariantsFilterListInput>
  price?: Maybe<FloatQueryOperatorInput>
  category?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  models?: Maybe<StringQueryOperatorInput>
  colors?: Maybe<StringQueryOperatorInput>
  images?: Maybe<SitePageContextShirtsImagesFilterListInput>
  sku?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextShirtsFilterListInput {
  elemMatch?: Maybe<SitePageContextShirtsFilterInput>
}

export interface SitePageContextShirtsImages {
  base64?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
  srcSet?: Maybe<Scalars['String']>
  sizes?: Maybe<Scalars['String']>
  alt?: Maybe<Scalars['String']>
}

export interface SitePageContextShirtsImagesFilterInput {
  base64?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  alt?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextShirtsImagesFilterListInput {
  elemMatch?: Maybe<SitePageContextShirtsImagesFilterInput>
}

export interface SitePageContextShirtsVariants {
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['String']>
  sku?: Maybe<Scalars['String']>
}

export interface SitePageContextShirtsVariantsFilterInput {
  id?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  price?: Maybe<StringQueryOperatorInput>
  sku?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextShirtsVariantsFilterListInput {
  elemMatch?: Maybe<SitePageContextShirtsVariantsFilterInput>
}

export interface SitePageContextShirtVariants {
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['String']>
  sku?: Maybe<Scalars['String']>
}

export interface SitePageContextShirtVariantsFilterInput {
  id?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  price?: Maybe<StringQueryOperatorInput>
  sku?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextShirtVariantsFilterListInput {
  elemMatch?: Maybe<SitePageContextShirtVariantsFilterInput>
}

export interface SitePageEdge {
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'isCreatedByStatefulCreatePages'
  | 'context___shirt___title'
  | 'context___shirt___variants'
  | 'context___shirt___variants___id'
  | 'context___shirt___variants___title'
  | 'context___shirt___variants___price'
  | 'context___shirt___variants___sku'
  | 'context___shirt___price'
  | 'context___shirt___category'
  | 'context___shirt___description'
  | 'context___shirt___sizes'
  | 'context___shirt___models'
  | 'context___shirt___colors'
  | 'context___shirt___images'
  | 'context___shirt___images___base64'
  | 'context___shirt___images___aspectRatio'
  | 'context___shirt___images___src'
  | 'context___shirt___images___srcSet'
  | 'context___shirt___images___sizes'
  | 'context___shirt___images___alt'
  | 'context___shirt___sku'
  | 'context___shirts'
  | 'context___shirts___title'
  | 'context___shirts___variants'
  | 'context___shirts___variants___id'
  | 'context___shirts___variants___title'
  | 'context___shirts___variants___price'
  | 'context___shirts___variants___sku'
  | 'context___shirts___price'
  | 'context___shirts___category'
  | 'context___shirts___description'
  | 'context___shirts___sizes'
  | 'context___shirts___models'
  | 'context___shirts___colors'
  | 'context___shirts___images'
  | 'context___shirts___images___base64'
  | 'context___shirts___images___aspectRatio'
  | 'context___shirts___images___src'
  | 'context___shirts___images___srcSet'
  | 'context___shirts___images___sizes'
  | 'context___shirts___images___alt'
  | 'context___shirts___sku'
  | 'context___currentPage'
  | 'context___lastPage'
  | 'context___category'
  | 'context___categorySlug'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___isUsingColorMode'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___shopName'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export interface SitePageFilterInput {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export interface SitePageGroupConnection {
  totalCount: Scalars['Int']
  edges: SitePageEdge[]
  nodes: SitePage[]
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export interface SitePageSortInput {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Node[]
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export interface SitePluginConnection {
  totalCount: Scalars['Int']
  edges: SitePluginEdge[]
  nodes: SitePlugin[]
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: SitePluginGroupConnection[]
}

export interface SitePluginConnectionDistinctArgs {
  field: SitePluginFieldsEnum
}

export interface SitePluginConnectionGroupArgs {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export interface SitePluginEdge {
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___name'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___isUsingColorMode'
  | 'pluginOptions___path'
  | 'pluginOptions___shopName'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords'

export interface SitePluginFilterInput {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export interface SitePluginGroupConnection {
  totalCount: Scalars['Int']
  edges: SitePluginEdge[]
  nodes: SitePlugin[]
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export interface SitePluginPackageJson {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface SitePluginPackageJsonDependencies {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export interface SitePluginPackageJsonDependenciesFilterInput {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export interface SitePluginPackageJsonDependenciesFilterListInput {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export interface SitePluginPackageJsonDevDependencies {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export interface SitePluginPackageJsonDevDependenciesFilterInput {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export interface SitePluginPackageJsonDevDependenciesFilterListInput {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export interface SitePluginPackageJsonFilterInput {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export interface SitePluginPackageJsonPeerDependencies {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export interface SitePluginPackageJsonPeerDependenciesFilterInput {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export interface SitePluginPackageJsonPeerDependenciesFilterListInput {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export interface SitePluginPluginOptions {
  name?: Maybe<Scalars['String']>
  short_name?: Maybe<Scalars['String']>
  start_url?: Maybe<Scalars['String']>
  background_color?: Maybe<Scalars['String']>
  theme_color?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  cache_busting_mode?: Maybe<Scalars['String']>
  include_favicon?: Maybe<Scalars['Boolean']>
  legacy?: Maybe<Scalars['Boolean']>
  theme_color_in_head?: Maybe<Scalars['Boolean']>
  cacheDigest?: Maybe<Scalars['String']>
  isUsingColorMode?: Maybe<Scalars['Boolean']>
  path?: Maybe<Scalars['String']>
  shopName?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  pathCheck?: Maybe<Scalars['Boolean']>
}

export interface SitePluginPluginOptionsFilterInput {
  name?: Maybe<StringQueryOperatorInput>
  short_name?: Maybe<StringQueryOperatorInput>
  start_url?: Maybe<StringQueryOperatorInput>
  background_color?: Maybe<StringQueryOperatorInput>
  theme_color?: Maybe<StringQueryOperatorInput>
  display?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  cache_busting_mode?: Maybe<StringQueryOperatorInput>
  include_favicon?: Maybe<BooleanQueryOperatorInput>
  legacy?: Maybe<BooleanQueryOperatorInput>
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>
  cacheDigest?: Maybe<StringQueryOperatorInput>
  isUsingColorMode?: Maybe<BooleanQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  shopName?: Maybe<StringQueryOperatorInput>
  accessToken?: Maybe<StringQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export interface SitePluginSortInput {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export interface SiteSiteMetadata {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
}

export interface SiteSiteMetadataFilterInput {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  siteUrl?: Maybe<StringQueryOperatorInput>
}

export interface SiteSortInput {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SortOrderEnum =
  | 'ASC'
  | 'DESC'

export interface StringQueryOperatorInput {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}
