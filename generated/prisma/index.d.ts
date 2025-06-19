
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BurnoutAssessment
 * 
 */
export type BurnoutAssessment = $Result.DefaultSelection<Prisma.$BurnoutAssessmentPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model ExerciseInput
 * 
 */
export type ExerciseInput = $Result.DefaultSelection<Prisma.$ExerciseInputPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model CourseModule
 * 
 */
export type CourseModule = $Result.DefaultSelection<Prisma.$CourseModulePayload>
/**
 * Model CourseModuleInput
 * 
 */
export type CourseModuleInput = $Result.DefaultSelection<Prisma.$CourseModuleInputPayload>
/**
 * Model CourseResourceStatus
 * 
 */
export type CourseResourceStatus = $Result.DefaultSelection<Prisma.$CourseResourceStatusPayload>
/**
 * Model RecommendedArticle
 * 
 */
export type RecommendedArticle = $Result.DefaultSelection<Prisma.$RecommendedArticlePayload>
/**
 * Model StressRating
 * 
 */
export type StressRating = $Result.DefaultSelection<Prisma.$StressRatingPayload>
/**
 * Model JournalEntry
 * 
 */
export type JournalEntry = $Result.DefaultSelection<Prisma.$JournalEntryPayload>
/**
 * Model JournalEntryInput
 * 
 */
export type JournalEntryInput = $Result.DefaultSelection<Prisma.$JournalEntryInputPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.burnoutAssessment`: Exposes CRUD operations for the **BurnoutAssessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BurnoutAssessments
    * const burnoutAssessments = await prisma.burnoutAssessment.findMany()
    * ```
    */
  get burnoutAssessment(): Prisma.BurnoutAssessmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exerciseInput`: Exposes CRUD operations for the **ExerciseInput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseInputs
    * const exerciseInputs = await prisma.exerciseInput.findMany()
    * ```
    */
  get exerciseInput(): Prisma.ExerciseInputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseModule`: Exposes CRUD operations for the **CourseModule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseModules
    * const courseModules = await prisma.courseModule.findMany()
    * ```
    */
  get courseModule(): Prisma.CourseModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseModuleInput`: Exposes CRUD operations for the **CourseModuleInput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseModuleInputs
    * const courseModuleInputs = await prisma.courseModuleInput.findMany()
    * ```
    */
  get courseModuleInput(): Prisma.CourseModuleInputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseResourceStatus`: Exposes CRUD operations for the **CourseResourceStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseResourceStatuses
    * const courseResourceStatuses = await prisma.courseResourceStatus.findMany()
    * ```
    */
  get courseResourceStatus(): Prisma.CourseResourceStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommendedArticle`: Exposes CRUD operations for the **RecommendedArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecommendedArticles
    * const recommendedArticles = await prisma.recommendedArticle.findMany()
    * ```
    */
  get recommendedArticle(): Prisma.RecommendedArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stressRating`: Exposes CRUD operations for the **StressRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StressRatings
    * const stressRatings = await prisma.stressRating.findMany()
    * ```
    */
  get stressRating(): Prisma.StressRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.journalEntry`: Exposes CRUD operations for the **JournalEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JournalEntries
    * const journalEntries = await prisma.journalEntry.findMany()
    * ```
    */
  get journalEntry(): Prisma.JournalEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.journalEntryInput`: Exposes CRUD operations for the **JournalEntryInput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JournalEntryInputs
    * const journalEntryInputs = await prisma.journalEntryInput.findMany()
    * ```
    */
  get journalEntryInput(): Prisma.JournalEntryInputDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    BurnoutAssessment: 'BurnoutAssessment',
    Exercise: 'Exercise',
    ExerciseInput: 'ExerciseInput',
    Course: 'Course',
    CourseModule: 'CourseModule',
    CourseModuleInput: 'CourseModuleInput',
    CourseResourceStatus: 'CourseResourceStatus',
    RecommendedArticle: 'RecommendedArticle',
    StressRating: 'StressRating',
    JournalEntry: 'JournalEntry',
    JournalEntryInput: 'JournalEntryInput'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "burnoutAssessment" | "exercise" | "exerciseInput" | "course" | "courseModule" | "courseModuleInput" | "courseResourceStatus" | "recommendedArticle" | "stressRating" | "journalEntry" | "journalEntryInput"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BurnoutAssessment: {
        payload: Prisma.$BurnoutAssessmentPayload<ExtArgs>
        fields: Prisma.BurnoutAssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BurnoutAssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurnoutAssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BurnoutAssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurnoutAssessmentPayload>
          }
          findFirst: {
            args: Prisma.BurnoutAssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurnoutAssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BurnoutAssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurnoutAssessmentPayload>
          }
          findMany: {
            args: Prisma.BurnoutAssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurnoutAssessmentPayload>[]
          }
          create: {
            args: Prisma.BurnoutAssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurnoutAssessmentPayload>
          }
          createMany: {
            args: Prisma.BurnoutAssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BurnoutAssessmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurnoutAssessmentPayload>[]
          }
          delete: {
            args: Prisma.BurnoutAssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurnoutAssessmentPayload>
          }
          update: {
            args: Prisma.BurnoutAssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurnoutAssessmentPayload>
          }
          deleteMany: {
            args: Prisma.BurnoutAssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BurnoutAssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BurnoutAssessmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurnoutAssessmentPayload>[]
          }
          upsert: {
            args: Prisma.BurnoutAssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurnoutAssessmentPayload>
          }
          aggregate: {
            args: Prisma.BurnoutAssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBurnoutAssessment>
          }
          groupBy: {
            args: Prisma.BurnoutAssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<BurnoutAssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.BurnoutAssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<BurnoutAssessmentCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      ExerciseInput: {
        payload: Prisma.$ExerciseInputPayload<ExtArgs>
        fields: Prisma.ExerciseInputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseInputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseInputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseInputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseInputPayload>
          }
          findFirst: {
            args: Prisma.ExerciseInputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseInputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseInputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseInputPayload>
          }
          findMany: {
            args: Prisma.ExerciseInputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseInputPayload>[]
          }
          create: {
            args: Prisma.ExerciseInputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseInputPayload>
          }
          createMany: {
            args: Prisma.ExerciseInputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseInputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseInputPayload>[]
          }
          delete: {
            args: Prisma.ExerciseInputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseInputPayload>
          }
          update: {
            args: Prisma.ExerciseInputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseInputPayload>
          }
          deleteMany: {
            args: Prisma.ExerciseInputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseInputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseInputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseInputPayload>[]
          }
          upsert: {
            args: Prisma.ExerciseInputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseInputPayload>
          }
          aggregate: {
            args: Prisma.ExerciseInputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExerciseInput>
          }
          groupBy: {
            args: Prisma.ExerciseInputGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseInputGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseInputCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseInputCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      CourseModule: {
        payload: Prisma.$CourseModulePayload<ExtArgs>
        fields: Prisma.CourseModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>
          }
          findFirst: {
            args: Prisma.CourseModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>
          }
          findMany: {
            args: Prisma.CourseModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>[]
          }
          create: {
            args: Prisma.CourseModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>
          }
          createMany: {
            args: Prisma.CourseModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>[]
          }
          delete: {
            args: Prisma.CourseModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>
          }
          update: {
            args: Prisma.CourseModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>
          }
          deleteMany: {
            args: Prisma.CourseModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>[]
          }
          upsert: {
            args: Prisma.CourseModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>
          }
          aggregate: {
            args: Prisma.CourseModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseModule>
          }
          groupBy: {
            args: Prisma.CourseModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseModuleCountArgs<ExtArgs>
            result: $Utils.Optional<CourseModuleCountAggregateOutputType> | number
          }
        }
      }
      CourseModuleInput: {
        payload: Prisma.$CourseModuleInputPayload<ExtArgs>
        fields: Prisma.CourseModuleInputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseModuleInputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModuleInputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseModuleInputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModuleInputPayload>
          }
          findFirst: {
            args: Prisma.CourseModuleInputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModuleInputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseModuleInputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModuleInputPayload>
          }
          findMany: {
            args: Prisma.CourseModuleInputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModuleInputPayload>[]
          }
          create: {
            args: Prisma.CourseModuleInputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModuleInputPayload>
          }
          createMany: {
            args: Prisma.CourseModuleInputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseModuleInputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModuleInputPayload>[]
          }
          delete: {
            args: Prisma.CourseModuleInputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModuleInputPayload>
          }
          update: {
            args: Prisma.CourseModuleInputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModuleInputPayload>
          }
          deleteMany: {
            args: Prisma.CourseModuleInputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseModuleInputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseModuleInputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModuleInputPayload>[]
          }
          upsert: {
            args: Prisma.CourseModuleInputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModuleInputPayload>
          }
          aggregate: {
            args: Prisma.CourseModuleInputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseModuleInput>
          }
          groupBy: {
            args: Prisma.CourseModuleInputGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseModuleInputGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseModuleInputCountArgs<ExtArgs>
            result: $Utils.Optional<CourseModuleInputCountAggregateOutputType> | number
          }
        }
      }
      CourseResourceStatus: {
        payload: Prisma.$CourseResourceStatusPayload<ExtArgs>
        fields: Prisma.CourseResourceStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseResourceStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourceStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseResourceStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourceStatusPayload>
          }
          findFirst: {
            args: Prisma.CourseResourceStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourceStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseResourceStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourceStatusPayload>
          }
          findMany: {
            args: Prisma.CourseResourceStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourceStatusPayload>[]
          }
          create: {
            args: Prisma.CourseResourceStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourceStatusPayload>
          }
          createMany: {
            args: Prisma.CourseResourceStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseResourceStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourceStatusPayload>[]
          }
          delete: {
            args: Prisma.CourseResourceStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourceStatusPayload>
          }
          update: {
            args: Prisma.CourseResourceStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourceStatusPayload>
          }
          deleteMany: {
            args: Prisma.CourseResourceStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseResourceStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseResourceStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourceStatusPayload>[]
          }
          upsert: {
            args: Prisma.CourseResourceStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourceStatusPayload>
          }
          aggregate: {
            args: Prisma.CourseResourceStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseResourceStatus>
          }
          groupBy: {
            args: Prisma.CourseResourceStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseResourceStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseResourceStatusCountArgs<ExtArgs>
            result: $Utils.Optional<CourseResourceStatusCountAggregateOutputType> | number
          }
        }
      }
      RecommendedArticle: {
        payload: Prisma.$RecommendedArticlePayload<ExtArgs>
        fields: Prisma.RecommendedArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendedArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendedArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedArticlePayload>
          }
          findFirst: {
            args: Prisma.RecommendedArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendedArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedArticlePayload>
          }
          findMany: {
            args: Prisma.RecommendedArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedArticlePayload>[]
          }
          create: {
            args: Prisma.RecommendedArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedArticlePayload>
          }
          createMany: {
            args: Prisma.RecommendedArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendedArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedArticlePayload>[]
          }
          delete: {
            args: Prisma.RecommendedArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedArticlePayload>
          }
          update: {
            args: Prisma.RecommendedArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedArticlePayload>
          }
          deleteMany: {
            args: Prisma.RecommendedArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendedArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecommendedArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedArticlePayload>[]
          }
          upsert: {
            args: Prisma.RecommendedArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendedArticlePayload>
          }
          aggregate: {
            args: Prisma.RecommendedArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendedArticle>
          }
          groupBy: {
            args: Prisma.RecommendedArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendedArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendedArticleCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendedArticleCountAggregateOutputType> | number
          }
        }
      }
      StressRating: {
        payload: Prisma.$StressRatingPayload<ExtArgs>
        fields: Prisma.StressRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StressRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StressRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StressRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StressRatingPayload>
          }
          findFirst: {
            args: Prisma.StressRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StressRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StressRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StressRatingPayload>
          }
          findMany: {
            args: Prisma.StressRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StressRatingPayload>[]
          }
          create: {
            args: Prisma.StressRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StressRatingPayload>
          }
          createMany: {
            args: Prisma.StressRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StressRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StressRatingPayload>[]
          }
          delete: {
            args: Prisma.StressRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StressRatingPayload>
          }
          update: {
            args: Prisma.StressRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StressRatingPayload>
          }
          deleteMany: {
            args: Prisma.StressRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StressRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StressRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StressRatingPayload>[]
          }
          upsert: {
            args: Prisma.StressRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StressRatingPayload>
          }
          aggregate: {
            args: Prisma.StressRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStressRating>
          }
          groupBy: {
            args: Prisma.StressRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<StressRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.StressRatingCountArgs<ExtArgs>
            result: $Utils.Optional<StressRatingCountAggregateOutputType> | number
          }
        }
      }
      JournalEntry: {
        payload: Prisma.$JournalEntryPayload<ExtArgs>
        fields: Prisma.JournalEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JournalEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JournalEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          findFirst: {
            args: Prisma.JournalEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JournalEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          findMany: {
            args: Prisma.JournalEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          create: {
            args: Prisma.JournalEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          createMany: {
            args: Prisma.JournalEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JournalEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          delete: {
            args: Prisma.JournalEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          update: {
            args: Prisma.JournalEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          deleteMany: {
            args: Prisma.JournalEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JournalEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JournalEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          upsert: {
            args: Prisma.JournalEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          aggregate: {
            args: Prisma.JournalEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJournalEntry>
          }
          groupBy: {
            args: Prisma.JournalEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.JournalEntryCountArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryCountAggregateOutputType> | number
          }
        }
      }
      JournalEntryInput: {
        payload: Prisma.$JournalEntryInputPayload<ExtArgs>
        fields: Prisma.JournalEntryInputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JournalEntryInputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryInputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JournalEntryInputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryInputPayload>
          }
          findFirst: {
            args: Prisma.JournalEntryInputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryInputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JournalEntryInputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryInputPayload>
          }
          findMany: {
            args: Prisma.JournalEntryInputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryInputPayload>[]
          }
          create: {
            args: Prisma.JournalEntryInputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryInputPayload>
          }
          createMany: {
            args: Prisma.JournalEntryInputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JournalEntryInputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryInputPayload>[]
          }
          delete: {
            args: Prisma.JournalEntryInputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryInputPayload>
          }
          update: {
            args: Prisma.JournalEntryInputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryInputPayload>
          }
          deleteMany: {
            args: Prisma.JournalEntryInputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JournalEntryInputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JournalEntryInputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryInputPayload>[]
          }
          upsert: {
            args: Prisma.JournalEntryInputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryInputPayload>
          }
          aggregate: {
            args: Prisma.JournalEntryInputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJournalEntryInput>
          }
          groupBy: {
            args: Prisma.JournalEntryInputGroupByArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryInputGroupByOutputType>[]
          }
          count: {
            args: Prisma.JournalEntryInputCountArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryInputCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    burnoutAssessment?: BurnoutAssessmentOmit
    exercise?: ExerciseOmit
    exerciseInput?: ExerciseInputOmit
    course?: CourseOmit
    courseModule?: CourseModuleOmit
    courseModuleInput?: CourseModuleInputOmit
    courseResourceStatus?: CourseResourceStatusOmit
    recommendedArticle?: RecommendedArticleOmit
    stressRating?: StressRatingOmit
    journalEntry?: JournalEntryOmit
    journalEntryInput?: JournalEntryInputOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    burnoutAssessments: number
    exercises: number
    courses: number
    stressRatings: number
    journalEntries: number
    recommendedArticles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    burnoutAssessments?: boolean | UserCountOutputTypeCountBurnoutAssessmentsArgs
    exercises?: boolean | UserCountOutputTypeCountExercisesArgs
    courses?: boolean | UserCountOutputTypeCountCoursesArgs
    stressRatings?: boolean | UserCountOutputTypeCountStressRatingsArgs
    journalEntries?: boolean | UserCountOutputTypeCountJournalEntriesArgs
    recommendedArticles?: boolean | UserCountOutputTypeCountRecommendedArticlesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBurnoutAssessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BurnoutAssessmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStressRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StressRatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJournalEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecommendedArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendedArticleWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    encryptedUserInputs: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encryptedUserInputs?: boolean | ExerciseCountOutputTypeCountEncryptedUserInputsArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountEncryptedUserInputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseInputWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    modules: number
    resourcesStatus: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | CourseCountOutputTypeCountModulesArgs
    resourcesStatus?: boolean | CourseCountOutputTypeCountResourcesStatusArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseModuleWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountResourcesStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseResourceStatusWhereInput
  }


  /**
   * Count Type CourseModuleCountOutputType
   */

  export type CourseModuleCountOutputType = {
    encryptedInputs: number
  }

  export type CourseModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encryptedInputs?: boolean | CourseModuleCountOutputTypeCountEncryptedInputsArgs
  }

  // Custom InputTypes
  /**
   * CourseModuleCountOutputType without action
   */
  export type CourseModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModuleCountOutputType
     */
    select?: CourseModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseModuleCountOutputType without action
   */
  export type CourseModuleCountOutputTypeCountEncryptedInputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseModuleInputWhereInput
  }


  /**
   * Count Type JournalEntryCountOutputType
   */

  export type JournalEntryCountOutputType = {
    inputs: number
  }

  export type JournalEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inputs?: boolean | JournalEntryCountOutputTypeCountInputsArgs
  }

  // Custom InputTypes
  /**
   * JournalEntryCountOutputType without action
   */
  export type JournalEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryCountOutputType
     */
    select?: JournalEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JournalEntryCountOutputType without action
   */
  export type JournalEntryCountOutputTypeCountInputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryInputWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    burnoutAssessments?: boolean | User$burnoutAssessmentsArgs<ExtArgs>
    exercises?: boolean | User$exercisesArgs<ExtArgs>
    courses?: boolean | User$coursesArgs<ExtArgs>
    stressRatings?: boolean | User$stressRatingsArgs<ExtArgs>
    journalEntries?: boolean | User$journalEntriesArgs<ExtArgs>
    recommendedArticles?: boolean | User$recommendedArticlesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    burnoutAssessments?: boolean | User$burnoutAssessmentsArgs<ExtArgs>
    exercises?: boolean | User$exercisesArgs<ExtArgs>
    courses?: boolean | User$coursesArgs<ExtArgs>
    stressRatings?: boolean | User$stressRatingsArgs<ExtArgs>
    journalEntries?: boolean | User$journalEntriesArgs<ExtArgs>
    recommendedArticles?: boolean | User$recommendedArticlesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      burnoutAssessments: Prisma.$BurnoutAssessmentPayload<ExtArgs>[]
      exercises: Prisma.$ExercisePayload<ExtArgs>[]
      courses: Prisma.$CoursePayload<ExtArgs>[]
      stressRatings: Prisma.$StressRatingPayload<ExtArgs>[]
      journalEntries: Prisma.$JournalEntryPayload<ExtArgs>[]
      recommendedArticles: Prisma.$RecommendedArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    burnoutAssessments<T extends User$burnoutAssessmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$burnoutAssessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BurnoutAssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exercises<T extends User$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, User$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courses<T extends User$coursesArgs<ExtArgs> = {}>(args?: Subset<T, User$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stressRatings<T extends User$stressRatingsArgs<ExtArgs> = {}>(args?: Subset<T, User$stressRatingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StressRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    journalEntries<T extends User$journalEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$journalEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommendedArticles<T extends User$recommendedArticlesArgs<ExtArgs> = {}>(args?: Subset<T, User$recommendedArticlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendedArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.burnoutAssessments
   */
  export type User$burnoutAssessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurnoutAssessment
     */
    select?: BurnoutAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BurnoutAssessment
     */
    omit?: BurnoutAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurnoutAssessmentInclude<ExtArgs> | null
    where?: BurnoutAssessmentWhereInput
    orderBy?: BurnoutAssessmentOrderByWithRelationInput | BurnoutAssessmentOrderByWithRelationInput[]
    cursor?: BurnoutAssessmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BurnoutAssessmentScalarFieldEnum | BurnoutAssessmentScalarFieldEnum[]
  }

  /**
   * User.exercises
   */
  export type User$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    cursor?: ExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * User.courses
   */
  export type User$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.stressRatings
   */
  export type User$stressRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StressRating
     */
    select?: StressRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StressRating
     */
    omit?: StressRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StressRatingInclude<ExtArgs> | null
    where?: StressRatingWhereInput
    orderBy?: StressRatingOrderByWithRelationInput | StressRatingOrderByWithRelationInput[]
    cursor?: StressRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StressRatingScalarFieldEnum | StressRatingScalarFieldEnum[]
  }

  /**
   * User.journalEntries
   */
  export type User$journalEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    where?: JournalEntryWhereInput
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    cursor?: JournalEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * User.recommendedArticles
   */
  export type User$recommendedArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedArticle
     */
    select?: RecommendedArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedArticle
     */
    omit?: RecommendedArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedArticleInclude<ExtArgs> | null
    where?: RecommendedArticleWhereInput
    orderBy?: RecommendedArticleOrderByWithRelationInput | RecommendedArticleOrderByWithRelationInput[]
    cursor?: RecommendedArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendedArticleScalarFieldEnum | RecommendedArticleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BurnoutAssessment
   */

  export type AggregateBurnoutAssessment = {
    _count: BurnoutAssessmentCountAggregateOutputType | null
    _min: BurnoutAssessmentMinAggregateOutputType | null
    _max: BurnoutAssessmentMaxAggregateOutputType | null
  }

  export type BurnoutAssessmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    assessmentKey: string | null
    createdAt: Date | null
  }

  export type BurnoutAssessmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    assessmentKey: string | null
    createdAt: Date | null
  }

  export type BurnoutAssessmentCountAggregateOutputType = {
    id: number
    userId: number
    assessmentKey: number
    createdAt: number
    categoryScores: number
    _all: number
  }


  export type BurnoutAssessmentMinAggregateInputType = {
    id?: true
    userId?: true
    assessmentKey?: true
    createdAt?: true
  }

  export type BurnoutAssessmentMaxAggregateInputType = {
    id?: true
    userId?: true
    assessmentKey?: true
    createdAt?: true
  }

  export type BurnoutAssessmentCountAggregateInputType = {
    id?: true
    userId?: true
    assessmentKey?: true
    createdAt?: true
    categoryScores?: true
    _all?: true
  }

  export type BurnoutAssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BurnoutAssessment to aggregate.
     */
    where?: BurnoutAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BurnoutAssessments to fetch.
     */
    orderBy?: BurnoutAssessmentOrderByWithRelationInput | BurnoutAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BurnoutAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BurnoutAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BurnoutAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BurnoutAssessments
    **/
    _count?: true | BurnoutAssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BurnoutAssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BurnoutAssessmentMaxAggregateInputType
  }

  export type GetBurnoutAssessmentAggregateType<T extends BurnoutAssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateBurnoutAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBurnoutAssessment[P]>
      : GetScalarType<T[P], AggregateBurnoutAssessment[P]>
  }




  export type BurnoutAssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BurnoutAssessmentWhereInput
    orderBy?: BurnoutAssessmentOrderByWithAggregationInput | BurnoutAssessmentOrderByWithAggregationInput[]
    by: BurnoutAssessmentScalarFieldEnum[] | BurnoutAssessmentScalarFieldEnum
    having?: BurnoutAssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BurnoutAssessmentCountAggregateInputType | true
    _min?: BurnoutAssessmentMinAggregateInputType
    _max?: BurnoutAssessmentMaxAggregateInputType
  }

  export type BurnoutAssessmentGroupByOutputType = {
    id: string
    userId: string
    assessmentKey: string
    createdAt: Date
    categoryScores: JsonValue
    _count: BurnoutAssessmentCountAggregateOutputType | null
    _min: BurnoutAssessmentMinAggregateOutputType | null
    _max: BurnoutAssessmentMaxAggregateOutputType | null
  }

  type GetBurnoutAssessmentGroupByPayload<T extends BurnoutAssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BurnoutAssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BurnoutAssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BurnoutAssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], BurnoutAssessmentGroupByOutputType[P]>
        }
      >
    >


  export type BurnoutAssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assessmentKey?: boolean
    createdAt?: boolean
    categoryScores?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["burnoutAssessment"]>

  export type BurnoutAssessmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assessmentKey?: boolean
    createdAt?: boolean
    categoryScores?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["burnoutAssessment"]>

  export type BurnoutAssessmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assessmentKey?: boolean
    createdAt?: boolean
    categoryScores?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["burnoutAssessment"]>

  export type BurnoutAssessmentSelectScalar = {
    id?: boolean
    userId?: boolean
    assessmentKey?: boolean
    createdAt?: boolean
    categoryScores?: boolean
  }

  export type BurnoutAssessmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "assessmentKey" | "createdAt" | "categoryScores", ExtArgs["result"]["burnoutAssessment"]>
  export type BurnoutAssessmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BurnoutAssessmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BurnoutAssessmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BurnoutAssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BurnoutAssessment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      assessmentKey: string
      createdAt: Date
      categoryScores: Prisma.JsonValue
    }, ExtArgs["result"]["burnoutAssessment"]>
    composites: {}
  }

  type BurnoutAssessmentGetPayload<S extends boolean | null | undefined | BurnoutAssessmentDefaultArgs> = $Result.GetResult<Prisma.$BurnoutAssessmentPayload, S>

  type BurnoutAssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BurnoutAssessmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BurnoutAssessmentCountAggregateInputType | true
    }

  export interface BurnoutAssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BurnoutAssessment'], meta: { name: 'BurnoutAssessment' } }
    /**
     * Find zero or one BurnoutAssessment that matches the filter.
     * @param {BurnoutAssessmentFindUniqueArgs} args - Arguments to find a BurnoutAssessment
     * @example
     * // Get one BurnoutAssessment
     * const burnoutAssessment = await prisma.burnoutAssessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BurnoutAssessmentFindUniqueArgs>(args: SelectSubset<T, BurnoutAssessmentFindUniqueArgs<ExtArgs>>): Prisma__BurnoutAssessmentClient<$Result.GetResult<Prisma.$BurnoutAssessmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BurnoutAssessment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BurnoutAssessmentFindUniqueOrThrowArgs} args - Arguments to find a BurnoutAssessment
     * @example
     * // Get one BurnoutAssessment
     * const burnoutAssessment = await prisma.burnoutAssessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BurnoutAssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, BurnoutAssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BurnoutAssessmentClient<$Result.GetResult<Prisma.$BurnoutAssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BurnoutAssessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurnoutAssessmentFindFirstArgs} args - Arguments to find a BurnoutAssessment
     * @example
     * // Get one BurnoutAssessment
     * const burnoutAssessment = await prisma.burnoutAssessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BurnoutAssessmentFindFirstArgs>(args?: SelectSubset<T, BurnoutAssessmentFindFirstArgs<ExtArgs>>): Prisma__BurnoutAssessmentClient<$Result.GetResult<Prisma.$BurnoutAssessmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BurnoutAssessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurnoutAssessmentFindFirstOrThrowArgs} args - Arguments to find a BurnoutAssessment
     * @example
     * // Get one BurnoutAssessment
     * const burnoutAssessment = await prisma.burnoutAssessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BurnoutAssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, BurnoutAssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__BurnoutAssessmentClient<$Result.GetResult<Prisma.$BurnoutAssessmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BurnoutAssessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurnoutAssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BurnoutAssessments
     * const burnoutAssessments = await prisma.burnoutAssessment.findMany()
     * 
     * // Get first 10 BurnoutAssessments
     * const burnoutAssessments = await prisma.burnoutAssessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const burnoutAssessmentWithIdOnly = await prisma.burnoutAssessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BurnoutAssessmentFindManyArgs>(args?: SelectSubset<T, BurnoutAssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BurnoutAssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BurnoutAssessment.
     * @param {BurnoutAssessmentCreateArgs} args - Arguments to create a BurnoutAssessment.
     * @example
     * // Create one BurnoutAssessment
     * const BurnoutAssessment = await prisma.burnoutAssessment.create({
     *   data: {
     *     // ... data to create a BurnoutAssessment
     *   }
     * })
     * 
     */
    create<T extends BurnoutAssessmentCreateArgs>(args: SelectSubset<T, BurnoutAssessmentCreateArgs<ExtArgs>>): Prisma__BurnoutAssessmentClient<$Result.GetResult<Prisma.$BurnoutAssessmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BurnoutAssessments.
     * @param {BurnoutAssessmentCreateManyArgs} args - Arguments to create many BurnoutAssessments.
     * @example
     * // Create many BurnoutAssessments
     * const burnoutAssessment = await prisma.burnoutAssessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BurnoutAssessmentCreateManyArgs>(args?: SelectSubset<T, BurnoutAssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BurnoutAssessments and returns the data saved in the database.
     * @param {BurnoutAssessmentCreateManyAndReturnArgs} args - Arguments to create many BurnoutAssessments.
     * @example
     * // Create many BurnoutAssessments
     * const burnoutAssessment = await prisma.burnoutAssessment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BurnoutAssessments and only return the `id`
     * const burnoutAssessmentWithIdOnly = await prisma.burnoutAssessment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BurnoutAssessmentCreateManyAndReturnArgs>(args?: SelectSubset<T, BurnoutAssessmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BurnoutAssessmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BurnoutAssessment.
     * @param {BurnoutAssessmentDeleteArgs} args - Arguments to delete one BurnoutAssessment.
     * @example
     * // Delete one BurnoutAssessment
     * const BurnoutAssessment = await prisma.burnoutAssessment.delete({
     *   where: {
     *     // ... filter to delete one BurnoutAssessment
     *   }
     * })
     * 
     */
    delete<T extends BurnoutAssessmentDeleteArgs>(args: SelectSubset<T, BurnoutAssessmentDeleteArgs<ExtArgs>>): Prisma__BurnoutAssessmentClient<$Result.GetResult<Prisma.$BurnoutAssessmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BurnoutAssessment.
     * @param {BurnoutAssessmentUpdateArgs} args - Arguments to update one BurnoutAssessment.
     * @example
     * // Update one BurnoutAssessment
     * const burnoutAssessment = await prisma.burnoutAssessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BurnoutAssessmentUpdateArgs>(args: SelectSubset<T, BurnoutAssessmentUpdateArgs<ExtArgs>>): Prisma__BurnoutAssessmentClient<$Result.GetResult<Prisma.$BurnoutAssessmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BurnoutAssessments.
     * @param {BurnoutAssessmentDeleteManyArgs} args - Arguments to filter BurnoutAssessments to delete.
     * @example
     * // Delete a few BurnoutAssessments
     * const { count } = await prisma.burnoutAssessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BurnoutAssessmentDeleteManyArgs>(args?: SelectSubset<T, BurnoutAssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BurnoutAssessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurnoutAssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BurnoutAssessments
     * const burnoutAssessment = await prisma.burnoutAssessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BurnoutAssessmentUpdateManyArgs>(args: SelectSubset<T, BurnoutAssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BurnoutAssessments and returns the data updated in the database.
     * @param {BurnoutAssessmentUpdateManyAndReturnArgs} args - Arguments to update many BurnoutAssessments.
     * @example
     * // Update many BurnoutAssessments
     * const burnoutAssessment = await prisma.burnoutAssessment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BurnoutAssessments and only return the `id`
     * const burnoutAssessmentWithIdOnly = await prisma.burnoutAssessment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BurnoutAssessmentUpdateManyAndReturnArgs>(args: SelectSubset<T, BurnoutAssessmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BurnoutAssessmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BurnoutAssessment.
     * @param {BurnoutAssessmentUpsertArgs} args - Arguments to update or create a BurnoutAssessment.
     * @example
     * // Update or create a BurnoutAssessment
     * const burnoutAssessment = await prisma.burnoutAssessment.upsert({
     *   create: {
     *     // ... data to create a BurnoutAssessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BurnoutAssessment we want to update
     *   }
     * })
     */
    upsert<T extends BurnoutAssessmentUpsertArgs>(args: SelectSubset<T, BurnoutAssessmentUpsertArgs<ExtArgs>>): Prisma__BurnoutAssessmentClient<$Result.GetResult<Prisma.$BurnoutAssessmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BurnoutAssessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurnoutAssessmentCountArgs} args - Arguments to filter BurnoutAssessments to count.
     * @example
     * // Count the number of BurnoutAssessments
     * const count = await prisma.burnoutAssessment.count({
     *   where: {
     *     // ... the filter for the BurnoutAssessments we want to count
     *   }
     * })
    **/
    count<T extends BurnoutAssessmentCountArgs>(
      args?: Subset<T, BurnoutAssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BurnoutAssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BurnoutAssessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurnoutAssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BurnoutAssessmentAggregateArgs>(args: Subset<T, BurnoutAssessmentAggregateArgs>): Prisma.PrismaPromise<GetBurnoutAssessmentAggregateType<T>>

    /**
     * Group by BurnoutAssessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurnoutAssessmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BurnoutAssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BurnoutAssessmentGroupByArgs['orderBy'] }
        : { orderBy?: BurnoutAssessmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BurnoutAssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBurnoutAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BurnoutAssessment model
   */
  readonly fields: BurnoutAssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BurnoutAssessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BurnoutAssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BurnoutAssessment model
   */
  interface BurnoutAssessmentFieldRefs {
    readonly id: FieldRef<"BurnoutAssessment", 'String'>
    readonly userId: FieldRef<"BurnoutAssessment", 'String'>
    readonly assessmentKey: FieldRef<"BurnoutAssessment", 'String'>
    readonly createdAt: FieldRef<"BurnoutAssessment", 'DateTime'>
    readonly categoryScores: FieldRef<"BurnoutAssessment", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * BurnoutAssessment findUnique
   */
  export type BurnoutAssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurnoutAssessment
     */
    select?: BurnoutAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BurnoutAssessment
     */
    omit?: BurnoutAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurnoutAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which BurnoutAssessment to fetch.
     */
    where: BurnoutAssessmentWhereUniqueInput
  }

  /**
   * BurnoutAssessment findUniqueOrThrow
   */
  export type BurnoutAssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurnoutAssessment
     */
    select?: BurnoutAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BurnoutAssessment
     */
    omit?: BurnoutAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurnoutAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which BurnoutAssessment to fetch.
     */
    where: BurnoutAssessmentWhereUniqueInput
  }

  /**
   * BurnoutAssessment findFirst
   */
  export type BurnoutAssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurnoutAssessment
     */
    select?: BurnoutAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BurnoutAssessment
     */
    omit?: BurnoutAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurnoutAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which BurnoutAssessment to fetch.
     */
    where?: BurnoutAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BurnoutAssessments to fetch.
     */
    orderBy?: BurnoutAssessmentOrderByWithRelationInput | BurnoutAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BurnoutAssessments.
     */
    cursor?: BurnoutAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BurnoutAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BurnoutAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BurnoutAssessments.
     */
    distinct?: BurnoutAssessmentScalarFieldEnum | BurnoutAssessmentScalarFieldEnum[]
  }

  /**
   * BurnoutAssessment findFirstOrThrow
   */
  export type BurnoutAssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurnoutAssessment
     */
    select?: BurnoutAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BurnoutAssessment
     */
    omit?: BurnoutAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurnoutAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which BurnoutAssessment to fetch.
     */
    where?: BurnoutAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BurnoutAssessments to fetch.
     */
    orderBy?: BurnoutAssessmentOrderByWithRelationInput | BurnoutAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BurnoutAssessments.
     */
    cursor?: BurnoutAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BurnoutAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BurnoutAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BurnoutAssessments.
     */
    distinct?: BurnoutAssessmentScalarFieldEnum | BurnoutAssessmentScalarFieldEnum[]
  }

  /**
   * BurnoutAssessment findMany
   */
  export type BurnoutAssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurnoutAssessment
     */
    select?: BurnoutAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BurnoutAssessment
     */
    omit?: BurnoutAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurnoutAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which BurnoutAssessments to fetch.
     */
    where?: BurnoutAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BurnoutAssessments to fetch.
     */
    orderBy?: BurnoutAssessmentOrderByWithRelationInput | BurnoutAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BurnoutAssessments.
     */
    cursor?: BurnoutAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BurnoutAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BurnoutAssessments.
     */
    skip?: number
    distinct?: BurnoutAssessmentScalarFieldEnum | BurnoutAssessmentScalarFieldEnum[]
  }

  /**
   * BurnoutAssessment create
   */
  export type BurnoutAssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurnoutAssessment
     */
    select?: BurnoutAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BurnoutAssessment
     */
    omit?: BurnoutAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurnoutAssessmentInclude<ExtArgs> | null
    /**
     * The data needed to create a BurnoutAssessment.
     */
    data: XOR<BurnoutAssessmentCreateInput, BurnoutAssessmentUncheckedCreateInput>
  }

  /**
   * BurnoutAssessment createMany
   */
  export type BurnoutAssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BurnoutAssessments.
     */
    data: BurnoutAssessmentCreateManyInput | BurnoutAssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BurnoutAssessment createManyAndReturn
   */
  export type BurnoutAssessmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurnoutAssessment
     */
    select?: BurnoutAssessmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BurnoutAssessment
     */
    omit?: BurnoutAssessmentOmit<ExtArgs> | null
    /**
     * The data used to create many BurnoutAssessments.
     */
    data: BurnoutAssessmentCreateManyInput | BurnoutAssessmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurnoutAssessmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BurnoutAssessment update
   */
  export type BurnoutAssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurnoutAssessment
     */
    select?: BurnoutAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BurnoutAssessment
     */
    omit?: BurnoutAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurnoutAssessmentInclude<ExtArgs> | null
    /**
     * The data needed to update a BurnoutAssessment.
     */
    data: XOR<BurnoutAssessmentUpdateInput, BurnoutAssessmentUncheckedUpdateInput>
    /**
     * Choose, which BurnoutAssessment to update.
     */
    where: BurnoutAssessmentWhereUniqueInput
  }

  /**
   * BurnoutAssessment updateMany
   */
  export type BurnoutAssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BurnoutAssessments.
     */
    data: XOR<BurnoutAssessmentUpdateManyMutationInput, BurnoutAssessmentUncheckedUpdateManyInput>
    /**
     * Filter which BurnoutAssessments to update
     */
    where?: BurnoutAssessmentWhereInput
    /**
     * Limit how many BurnoutAssessments to update.
     */
    limit?: number
  }

  /**
   * BurnoutAssessment updateManyAndReturn
   */
  export type BurnoutAssessmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurnoutAssessment
     */
    select?: BurnoutAssessmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BurnoutAssessment
     */
    omit?: BurnoutAssessmentOmit<ExtArgs> | null
    /**
     * The data used to update BurnoutAssessments.
     */
    data: XOR<BurnoutAssessmentUpdateManyMutationInput, BurnoutAssessmentUncheckedUpdateManyInput>
    /**
     * Filter which BurnoutAssessments to update
     */
    where?: BurnoutAssessmentWhereInput
    /**
     * Limit how many BurnoutAssessments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurnoutAssessmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BurnoutAssessment upsert
   */
  export type BurnoutAssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurnoutAssessment
     */
    select?: BurnoutAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BurnoutAssessment
     */
    omit?: BurnoutAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurnoutAssessmentInclude<ExtArgs> | null
    /**
     * The filter to search for the BurnoutAssessment to update in case it exists.
     */
    where: BurnoutAssessmentWhereUniqueInput
    /**
     * In case the BurnoutAssessment found by the `where` argument doesn't exist, create a new BurnoutAssessment with this data.
     */
    create: XOR<BurnoutAssessmentCreateInput, BurnoutAssessmentUncheckedCreateInput>
    /**
     * In case the BurnoutAssessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BurnoutAssessmentUpdateInput, BurnoutAssessmentUncheckedUpdateInput>
  }

  /**
   * BurnoutAssessment delete
   */
  export type BurnoutAssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurnoutAssessment
     */
    select?: BurnoutAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BurnoutAssessment
     */
    omit?: BurnoutAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurnoutAssessmentInclude<ExtArgs> | null
    /**
     * Filter which BurnoutAssessment to delete.
     */
    where: BurnoutAssessmentWhereUniqueInput
  }

  /**
   * BurnoutAssessment deleteMany
   */
  export type BurnoutAssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BurnoutAssessments to delete
     */
    where?: BurnoutAssessmentWhereInput
    /**
     * Limit how many BurnoutAssessments to delete.
     */
    limit?: number
  }

  /**
   * BurnoutAssessment without action
   */
  export type BurnoutAssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurnoutAssessment
     */
    select?: BurnoutAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BurnoutAssessment
     */
    omit?: BurnoutAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurnoutAssessmentInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseAvgAggregateOutputType = {
    completedPrompts: number | null
    completionPercentage: number | null
  }

  export type ExerciseSumAggregateOutputType = {
    completedPrompts: number | null
    completionPercentage: number | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    exerciseSlug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completedPrompts: number | null
    completionPercentage: number | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    exerciseSlug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completedPrompts: number | null
    completionPercentage: number | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    userId: number
    exerciseSlug: number
    createdAt: number
    updatedAt: number
    completedPrompts: number
    completionPercentage: number
    _all: number
  }


  export type ExerciseAvgAggregateInputType = {
    completedPrompts?: true
    completionPercentage?: true
  }

  export type ExerciseSumAggregateInputType = {
    completedPrompts?: true
    completionPercentage?: true
  }

  export type ExerciseMinAggregateInputType = {
    id?: true
    userId?: true
    exerciseSlug?: true
    createdAt?: true
    updatedAt?: true
    completedPrompts?: true
    completionPercentage?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    userId?: true
    exerciseSlug?: true
    createdAt?: true
    updatedAt?: true
    completedPrompts?: true
    completionPercentage?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    userId?: true
    exerciseSlug?: true
    createdAt?: true
    updatedAt?: true
    completedPrompts?: true
    completionPercentage?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _avg?: ExerciseAvgAggregateInputType
    _sum?: ExerciseSumAggregateInputType
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: string
    userId: string
    exerciseSlug: string
    createdAt: Date
    updatedAt: Date
    completedPrompts: number
    completionPercentage: number
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exerciseSlug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedPrompts?: boolean
    completionPercentage?: boolean
    encryptedUserInputs?: boolean | Exercise$encryptedUserInputsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exerciseSlug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedPrompts?: boolean
    completionPercentage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exerciseSlug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedPrompts?: boolean
    completionPercentage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    userId?: boolean
    exerciseSlug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedPrompts?: boolean
    completionPercentage?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "exerciseSlug" | "createdAt" | "updatedAt" | "completedPrompts" | "completionPercentage", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encryptedUserInputs?: boolean | Exercise$encryptedUserInputsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      encryptedUserInputs: Prisma.$ExerciseInputPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      exerciseSlug: string
      createdAt: Date
      updatedAt: Date
      completedPrompts: number
      completionPercentage: number
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    encryptedUserInputs<T extends Exercise$encryptedUserInputsArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$encryptedUserInputsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'String'>
    readonly userId: FieldRef<"Exercise", 'String'>
    readonly exerciseSlug: FieldRef<"Exercise", 'String'>
    readonly createdAt: FieldRef<"Exercise", 'DateTime'>
    readonly updatedAt: FieldRef<"Exercise", 'DateTime'>
    readonly completedPrompts: FieldRef<"Exercise", 'Int'>
    readonly completionPercentage: FieldRef<"Exercise", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.encryptedUserInputs
   */
  export type Exercise$encryptedUserInputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseInput
     */
    select?: ExerciseInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseInput
     */
    omit?: ExerciseInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInputInclude<ExtArgs> | null
    where?: ExerciseInputWhereInput
    orderBy?: ExerciseInputOrderByWithRelationInput | ExerciseInputOrderByWithRelationInput[]
    cursor?: ExerciseInputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseInputScalarFieldEnum | ExerciseInputScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model ExerciseInput
   */

  export type AggregateExerciseInput = {
    _count: ExerciseInputCountAggregateOutputType | null
    _min: ExerciseInputMinAggregateOutputType | null
    _max: ExerciseInputMaxAggregateOutputType | null
  }

  export type ExerciseInputMinAggregateOutputType = {
    id: string | null
    exerciseId: string | null
    inputKey: string | null
    encryptedData: string | null
    iv: string | null
  }

  export type ExerciseInputMaxAggregateOutputType = {
    id: string | null
    exerciseId: string | null
    inputKey: string | null
    encryptedData: string | null
    iv: string | null
  }

  export type ExerciseInputCountAggregateOutputType = {
    id: number
    exerciseId: number
    inputKey: number
    encryptedData: number
    iv: number
    _all: number
  }


  export type ExerciseInputMinAggregateInputType = {
    id?: true
    exerciseId?: true
    inputKey?: true
    encryptedData?: true
    iv?: true
  }

  export type ExerciseInputMaxAggregateInputType = {
    id?: true
    exerciseId?: true
    inputKey?: true
    encryptedData?: true
    iv?: true
  }

  export type ExerciseInputCountAggregateInputType = {
    id?: true
    exerciseId?: true
    inputKey?: true
    encryptedData?: true
    iv?: true
    _all?: true
  }

  export type ExerciseInputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseInput to aggregate.
     */
    where?: ExerciseInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseInputs to fetch.
     */
    orderBy?: ExerciseInputOrderByWithRelationInput | ExerciseInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExerciseInputs
    **/
    _count?: true | ExerciseInputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseInputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseInputMaxAggregateInputType
  }

  export type GetExerciseInputAggregateType<T extends ExerciseInputAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseInput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseInput[P]>
      : GetScalarType<T[P], AggregateExerciseInput[P]>
  }




  export type ExerciseInputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseInputWhereInput
    orderBy?: ExerciseInputOrderByWithAggregationInput | ExerciseInputOrderByWithAggregationInput[]
    by: ExerciseInputScalarFieldEnum[] | ExerciseInputScalarFieldEnum
    having?: ExerciseInputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseInputCountAggregateInputType | true
    _min?: ExerciseInputMinAggregateInputType
    _max?: ExerciseInputMaxAggregateInputType
  }

  export type ExerciseInputGroupByOutputType = {
    id: string
    exerciseId: string
    inputKey: string
    encryptedData: string
    iv: string
    _count: ExerciseInputCountAggregateOutputType | null
    _min: ExerciseInputMinAggregateOutputType | null
    _max: ExerciseInputMaxAggregateOutputType | null
  }

  type GetExerciseInputGroupByPayload<T extends ExerciseInputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseInputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseInputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseInputGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseInputGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseInputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    inputKey?: boolean
    encryptedData?: boolean
    iv?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseInput"]>

  export type ExerciseInputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    inputKey?: boolean
    encryptedData?: boolean
    iv?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseInput"]>

  export type ExerciseInputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    inputKey?: boolean
    encryptedData?: boolean
    iv?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseInput"]>

  export type ExerciseInputSelectScalar = {
    id?: boolean
    exerciseId?: boolean
    inputKey?: boolean
    encryptedData?: boolean
    iv?: boolean
  }

  export type ExerciseInputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exerciseId" | "inputKey" | "encryptedData" | "iv", ExtArgs["result"]["exerciseInput"]>
  export type ExerciseInputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type ExerciseInputIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type ExerciseInputIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $ExerciseInputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExerciseInput"
    objects: {
      exercise: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      exerciseId: string
      inputKey: string
      encryptedData: string
      iv: string
    }, ExtArgs["result"]["exerciseInput"]>
    composites: {}
  }

  type ExerciseInputGetPayload<S extends boolean | null | undefined | ExerciseInputDefaultArgs> = $Result.GetResult<Prisma.$ExerciseInputPayload, S>

  type ExerciseInputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseInputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseInputCountAggregateInputType | true
    }

  export interface ExerciseInputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExerciseInput'], meta: { name: 'ExerciseInput' } }
    /**
     * Find zero or one ExerciseInput that matches the filter.
     * @param {ExerciseInputFindUniqueArgs} args - Arguments to find a ExerciseInput
     * @example
     * // Get one ExerciseInput
     * const exerciseInput = await prisma.exerciseInput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseInputFindUniqueArgs>(args: SelectSubset<T, ExerciseInputFindUniqueArgs<ExtArgs>>): Prisma__ExerciseInputClient<$Result.GetResult<Prisma.$ExerciseInputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExerciseInput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseInputFindUniqueOrThrowArgs} args - Arguments to find a ExerciseInput
     * @example
     * // Get one ExerciseInput
     * const exerciseInput = await prisma.exerciseInput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseInputFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseInputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseInputClient<$Result.GetResult<Prisma.$ExerciseInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseInput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseInputFindFirstArgs} args - Arguments to find a ExerciseInput
     * @example
     * // Get one ExerciseInput
     * const exerciseInput = await prisma.exerciseInput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseInputFindFirstArgs>(args?: SelectSubset<T, ExerciseInputFindFirstArgs<ExtArgs>>): Prisma__ExerciseInputClient<$Result.GetResult<Prisma.$ExerciseInputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseInput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseInputFindFirstOrThrowArgs} args - Arguments to find a ExerciseInput
     * @example
     * // Get one ExerciseInput
     * const exerciseInput = await prisma.exerciseInput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseInputFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseInputFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseInputClient<$Result.GetResult<Prisma.$ExerciseInputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseInputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseInputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseInputs
     * const exerciseInputs = await prisma.exerciseInput.findMany()
     * 
     * // Get first 10 ExerciseInputs
     * const exerciseInputs = await prisma.exerciseInput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseInputWithIdOnly = await prisma.exerciseInput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseInputFindManyArgs>(args?: SelectSubset<T, ExerciseInputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExerciseInput.
     * @param {ExerciseInputCreateArgs} args - Arguments to create a ExerciseInput.
     * @example
     * // Create one ExerciseInput
     * const ExerciseInput = await prisma.exerciseInput.create({
     *   data: {
     *     // ... data to create a ExerciseInput
     *   }
     * })
     * 
     */
    create<T extends ExerciseInputCreateArgs>(args: SelectSubset<T, ExerciseInputCreateArgs<ExtArgs>>): Prisma__ExerciseInputClient<$Result.GetResult<Prisma.$ExerciseInputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExerciseInputs.
     * @param {ExerciseInputCreateManyArgs} args - Arguments to create many ExerciseInputs.
     * @example
     * // Create many ExerciseInputs
     * const exerciseInput = await prisma.exerciseInput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseInputCreateManyArgs>(args?: SelectSubset<T, ExerciseInputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExerciseInputs and returns the data saved in the database.
     * @param {ExerciseInputCreateManyAndReturnArgs} args - Arguments to create many ExerciseInputs.
     * @example
     * // Create many ExerciseInputs
     * const exerciseInput = await prisma.exerciseInput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExerciseInputs and only return the `id`
     * const exerciseInputWithIdOnly = await prisma.exerciseInput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseInputCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseInputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseInputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExerciseInput.
     * @param {ExerciseInputDeleteArgs} args - Arguments to delete one ExerciseInput.
     * @example
     * // Delete one ExerciseInput
     * const ExerciseInput = await prisma.exerciseInput.delete({
     *   where: {
     *     // ... filter to delete one ExerciseInput
     *   }
     * })
     * 
     */
    delete<T extends ExerciseInputDeleteArgs>(args: SelectSubset<T, ExerciseInputDeleteArgs<ExtArgs>>): Prisma__ExerciseInputClient<$Result.GetResult<Prisma.$ExerciseInputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExerciseInput.
     * @param {ExerciseInputUpdateArgs} args - Arguments to update one ExerciseInput.
     * @example
     * // Update one ExerciseInput
     * const exerciseInput = await prisma.exerciseInput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseInputUpdateArgs>(args: SelectSubset<T, ExerciseInputUpdateArgs<ExtArgs>>): Prisma__ExerciseInputClient<$Result.GetResult<Prisma.$ExerciseInputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExerciseInputs.
     * @param {ExerciseInputDeleteManyArgs} args - Arguments to filter ExerciseInputs to delete.
     * @example
     * // Delete a few ExerciseInputs
     * const { count } = await prisma.exerciseInput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseInputDeleteManyArgs>(args?: SelectSubset<T, ExerciseInputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseInputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseInputs
     * const exerciseInput = await prisma.exerciseInput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseInputUpdateManyArgs>(args: SelectSubset<T, ExerciseInputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseInputs and returns the data updated in the database.
     * @param {ExerciseInputUpdateManyAndReturnArgs} args - Arguments to update many ExerciseInputs.
     * @example
     * // Update many ExerciseInputs
     * const exerciseInput = await prisma.exerciseInput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExerciseInputs and only return the `id`
     * const exerciseInputWithIdOnly = await prisma.exerciseInput.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExerciseInputUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseInputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseInputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExerciseInput.
     * @param {ExerciseInputUpsertArgs} args - Arguments to update or create a ExerciseInput.
     * @example
     * // Update or create a ExerciseInput
     * const exerciseInput = await prisma.exerciseInput.upsert({
     *   create: {
     *     // ... data to create a ExerciseInput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseInput we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseInputUpsertArgs>(args: SelectSubset<T, ExerciseInputUpsertArgs<ExtArgs>>): Prisma__ExerciseInputClient<$Result.GetResult<Prisma.$ExerciseInputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExerciseInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseInputCountArgs} args - Arguments to filter ExerciseInputs to count.
     * @example
     * // Count the number of ExerciseInputs
     * const count = await prisma.exerciseInput.count({
     *   where: {
     *     // ... the filter for the ExerciseInputs we want to count
     *   }
     * })
    **/
    count<T extends ExerciseInputCountArgs>(
      args?: Subset<T, ExerciseInputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseInputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseInputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseInputAggregateArgs>(args: Subset<T, ExerciseInputAggregateArgs>): Prisma.PrismaPromise<GetExerciseInputAggregateType<T>>

    /**
     * Group by ExerciseInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseInputGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseInputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseInputGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseInputGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseInputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseInputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExerciseInput model
   */
  readonly fields: ExerciseInputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExerciseInput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseInputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExerciseInput model
   */
  interface ExerciseInputFieldRefs {
    readonly id: FieldRef<"ExerciseInput", 'String'>
    readonly exerciseId: FieldRef<"ExerciseInput", 'String'>
    readonly inputKey: FieldRef<"ExerciseInput", 'String'>
    readonly encryptedData: FieldRef<"ExerciseInput", 'String'>
    readonly iv: FieldRef<"ExerciseInput", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExerciseInput findUnique
   */
  export type ExerciseInputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseInput
     */
    select?: ExerciseInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseInput
     */
    omit?: ExerciseInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInputInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseInput to fetch.
     */
    where: ExerciseInputWhereUniqueInput
  }

  /**
   * ExerciseInput findUniqueOrThrow
   */
  export type ExerciseInputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseInput
     */
    select?: ExerciseInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseInput
     */
    omit?: ExerciseInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInputInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseInput to fetch.
     */
    where: ExerciseInputWhereUniqueInput
  }

  /**
   * ExerciseInput findFirst
   */
  export type ExerciseInputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseInput
     */
    select?: ExerciseInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseInput
     */
    omit?: ExerciseInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInputInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseInput to fetch.
     */
    where?: ExerciseInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseInputs to fetch.
     */
    orderBy?: ExerciseInputOrderByWithRelationInput | ExerciseInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseInputs.
     */
    cursor?: ExerciseInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseInputs.
     */
    distinct?: ExerciseInputScalarFieldEnum | ExerciseInputScalarFieldEnum[]
  }

  /**
   * ExerciseInput findFirstOrThrow
   */
  export type ExerciseInputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseInput
     */
    select?: ExerciseInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseInput
     */
    omit?: ExerciseInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInputInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseInput to fetch.
     */
    where?: ExerciseInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseInputs to fetch.
     */
    orderBy?: ExerciseInputOrderByWithRelationInput | ExerciseInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseInputs.
     */
    cursor?: ExerciseInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseInputs.
     */
    distinct?: ExerciseInputScalarFieldEnum | ExerciseInputScalarFieldEnum[]
  }

  /**
   * ExerciseInput findMany
   */
  export type ExerciseInputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseInput
     */
    select?: ExerciseInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseInput
     */
    omit?: ExerciseInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInputInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseInputs to fetch.
     */
    where?: ExerciseInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseInputs to fetch.
     */
    orderBy?: ExerciseInputOrderByWithRelationInput | ExerciseInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExerciseInputs.
     */
    cursor?: ExerciseInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseInputs.
     */
    skip?: number
    distinct?: ExerciseInputScalarFieldEnum | ExerciseInputScalarFieldEnum[]
  }

  /**
   * ExerciseInput create
   */
  export type ExerciseInputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseInput
     */
    select?: ExerciseInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseInput
     */
    omit?: ExerciseInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInputInclude<ExtArgs> | null
    /**
     * The data needed to create a ExerciseInput.
     */
    data: XOR<ExerciseInputCreateInput, ExerciseInputUncheckedCreateInput>
  }

  /**
   * ExerciseInput createMany
   */
  export type ExerciseInputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExerciseInputs.
     */
    data: ExerciseInputCreateManyInput | ExerciseInputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExerciseInput createManyAndReturn
   */
  export type ExerciseInputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseInput
     */
    select?: ExerciseInputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseInput
     */
    omit?: ExerciseInputOmit<ExtArgs> | null
    /**
     * The data used to create many ExerciseInputs.
     */
    data: ExerciseInputCreateManyInput | ExerciseInputCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInputIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseInput update
   */
  export type ExerciseInputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseInput
     */
    select?: ExerciseInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseInput
     */
    omit?: ExerciseInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInputInclude<ExtArgs> | null
    /**
     * The data needed to update a ExerciseInput.
     */
    data: XOR<ExerciseInputUpdateInput, ExerciseInputUncheckedUpdateInput>
    /**
     * Choose, which ExerciseInput to update.
     */
    where: ExerciseInputWhereUniqueInput
  }

  /**
   * ExerciseInput updateMany
   */
  export type ExerciseInputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExerciseInputs.
     */
    data: XOR<ExerciseInputUpdateManyMutationInput, ExerciseInputUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseInputs to update
     */
    where?: ExerciseInputWhereInput
    /**
     * Limit how many ExerciseInputs to update.
     */
    limit?: number
  }

  /**
   * ExerciseInput updateManyAndReturn
   */
  export type ExerciseInputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseInput
     */
    select?: ExerciseInputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseInput
     */
    omit?: ExerciseInputOmit<ExtArgs> | null
    /**
     * The data used to update ExerciseInputs.
     */
    data: XOR<ExerciseInputUpdateManyMutationInput, ExerciseInputUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseInputs to update
     */
    where?: ExerciseInputWhereInput
    /**
     * Limit how many ExerciseInputs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInputIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseInput upsert
   */
  export type ExerciseInputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseInput
     */
    select?: ExerciseInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseInput
     */
    omit?: ExerciseInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInputInclude<ExtArgs> | null
    /**
     * The filter to search for the ExerciseInput to update in case it exists.
     */
    where: ExerciseInputWhereUniqueInput
    /**
     * In case the ExerciseInput found by the `where` argument doesn't exist, create a new ExerciseInput with this data.
     */
    create: XOR<ExerciseInputCreateInput, ExerciseInputUncheckedCreateInput>
    /**
     * In case the ExerciseInput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseInputUpdateInput, ExerciseInputUncheckedUpdateInput>
  }

  /**
   * ExerciseInput delete
   */
  export type ExerciseInputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseInput
     */
    select?: ExerciseInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseInput
     */
    omit?: ExerciseInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInputInclude<ExtArgs> | null
    /**
     * Filter which ExerciseInput to delete.
     */
    where: ExerciseInputWhereUniqueInput
  }

  /**
   * ExerciseInput deleteMany
   */
  export type ExerciseInputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseInputs to delete
     */
    where?: ExerciseInputWhereInput
    /**
     * Limit how many ExerciseInputs to delete.
     */
    limit?: number
  }

  /**
   * ExerciseInput without action
   */
  export type ExerciseInputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseInput
     */
    select?: ExerciseInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseInput
     */
    omit?: ExerciseInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInputInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseSlug: string | null
    courseName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseSlug: string | null
    courseName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    userId: number
    courseSlug: number
    courseName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    userId?: true
    courseSlug?: true
    courseName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    userId?: true
    courseSlug?: true
    courseName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    userId?: true
    courseSlug?: true
    courseName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    userId: string
    courseSlug: string
    courseName: string
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseSlug?: boolean
    courseName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    modules?: boolean | Course$modulesArgs<ExtArgs>
    resourcesStatus?: boolean | Course$resourcesStatusArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseSlug?: boolean
    courseName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseSlug?: boolean
    courseName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    userId?: boolean
    courseSlug?: boolean
    courseName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseSlug" | "courseName" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    modules?: boolean | Course$modulesArgs<ExtArgs>
    resourcesStatus?: boolean | Course$resourcesStatusArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      modules: Prisma.$CourseModulePayload<ExtArgs>[]
      resourcesStatus: Prisma.$CourseResourceStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseSlug: string
      courseName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modules<T extends Course$modulesArgs<ExtArgs> = {}>(args?: Subset<T, Course$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resourcesStatus<T extends Course$resourcesStatusArgs<ExtArgs> = {}>(args?: Subset<T, Course$resourcesStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseResourceStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly userId: FieldRef<"Course", 'String'>
    readonly courseSlug: FieldRef<"Course", 'String'>
    readonly courseName: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.modules
   */
  export type Course$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    where?: CourseModuleWhereInput
    orderBy?: CourseModuleOrderByWithRelationInput | CourseModuleOrderByWithRelationInput[]
    cursor?: CourseModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseModuleScalarFieldEnum | CourseModuleScalarFieldEnum[]
  }

  /**
   * Course.resourcesStatus
   */
  export type Course$resourcesStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResourceStatus
     */
    select?: CourseResourceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResourceStatus
     */
    omit?: CourseResourceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceStatusInclude<ExtArgs> | null
    where?: CourseResourceStatusWhereInput
    orderBy?: CourseResourceStatusOrderByWithRelationInput | CourseResourceStatusOrderByWithRelationInput[]
    cursor?: CourseResourceStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseResourceStatusScalarFieldEnum | CourseResourceStatusScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model CourseModule
   */

  export type AggregateCourseModule = {
    _count: CourseModuleCountAggregateOutputType | null
    _min: CourseModuleMinAggregateOutputType | null
    _max: CourseModuleMaxAggregateOutputType | null
  }

  export type CourseModuleMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    moduleSlug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseModuleMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    moduleSlug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseModuleCountAggregateOutputType = {
    id: number
    courseId: number
    moduleSlug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseModuleMinAggregateInputType = {
    id?: true
    courseId?: true
    moduleSlug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseModuleMaxAggregateInputType = {
    id?: true
    courseId?: true
    moduleSlug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseModuleCountAggregateInputType = {
    id?: true
    courseId?: true
    moduleSlug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseModule to aggregate.
     */
    where?: CourseModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseModules to fetch.
     */
    orderBy?: CourseModuleOrderByWithRelationInput | CourseModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseModules
    **/
    _count?: true | CourseModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseModuleMaxAggregateInputType
  }

  export type GetCourseModuleAggregateType<T extends CourseModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseModule[P]>
      : GetScalarType<T[P], AggregateCourseModule[P]>
  }




  export type CourseModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseModuleWhereInput
    orderBy?: CourseModuleOrderByWithAggregationInput | CourseModuleOrderByWithAggregationInput[]
    by: CourseModuleScalarFieldEnum[] | CourseModuleScalarFieldEnum
    having?: CourseModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseModuleCountAggregateInputType | true
    _min?: CourseModuleMinAggregateInputType
    _max?: CourseModuleMaxAggregateInputType
  }

  export type CourseModuleGroupByOutputType = {
    id: string
    courseId: string
    moduleSlug: string
    createdAt: Date
    updatedAt: Date
    _count: CourseModuleCountAggregateOutputType | null
    _min: CourseModuleMinAggregateOutputType | null
    _max: CourseModuleMaxAggregateOutputType | null
  }

  type GetCourseModuleGroupByPayload<T extends CourseModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseModuleGroupByOutputType[P]>
            : GetScalarType<T[P], CourseModuleGroupByOutputType[P]>
        }
      >
    >


  export type CourseModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    moduleSlug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    encryptedInputs?: boolean | CourseModule$encryptedInputsArgs<ExtArgs>
    _count?: boolean | CourseModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseModule"]>

  export type CourseModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    moduleSlug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseModule"]>

  export type CourseModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    moduleSlug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseModule"]>

  export type CourseModuleSelectScalar = {
    id?: boolean
    courseId?: boolean
    moduleSlug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "moduleSlug" | "createdAt" | "updatedAt", ExtArgs["result"]["courseModule"]>
  export type CourseModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    encryptedInputs?: boolean | CourseModule$encryptedInputsArgs<ExtArgs>
    _count?: boolean | CourseModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseModule"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      encryptedInputs: Prisma.$CourseModuleInputPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      moduleSlug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseModule"]>
    composites: {}
  }

  type CourseModuleGetPayload<S extends boolean | null | undefined | CourseModuleDefaultArgs> = $Result.GetResult<Prisma.$CourseModulePayload, S>

  type CourseModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseModuleCountAggregateInputType | true
    }

  export interface CourseModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseModule'], meta: { name: 'CourseModule' } }
    /**
     * Find zero or one CourseModule that matches the filter.
     * @param {CourseModuleFindUniqueArgs} args - Arguments to find a CourseModule
     * @example
     * // Get one CourseModule
     * const courseModule = await prisma.courseModule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseModuleFindUniqueArgs>(args: SelectSubset<T, CourseModuleFindUniqueArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseModule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseModuleFindUniqueOrThrowArgs} args - Arguments to find a CourseModule
     * @example
     * // Get one CourseModule
     * const courseModule = await prisma.courseModule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseModule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleFindFirstArgs} args - Arguments to find a CourseModule
     * @example
     * // Get one CourseModule
     * const courseModule = await prisma.courseModule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseModuleFindFirstArgs>(args?: SelectSubset<T, CourseModuleFindFirstArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseModule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleFindFirstOrThrowArgs} args - Arguments to find a CourseModule
     * @example
     * // Get one CourseModule
     * const courseModule = await prisma.courseModule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseModules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseModules
     * const courseModules = await prisma.courseModule.findMany()
     * 
     * // Get first 10 CourseModules
     * const courseModules = await prisma.courseModule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseModuleWithIdOnly = await prisma.courseModule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseModuleFindManyArgs>(args?: SelectSubset<T, CourseModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseModule.
     * @param {CourseModuleCreateArgs} args - Arguments to create a CourseModule.
     * @example
     * // Create one CourseModule
     * const CourseModule = await prisma.courseModule.create({
     *   data: {
     *     // ... data to create a CourseModule
     *   }
     * })
     * 
     */
    create<T extends CourseModuleCreateArgs>(args: SelectSubset<T, CourseModuleCreateArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseModules.
     * @param {CourseModuleCreateManyArgs} args - Arguments to create many CourseModules.
     * @example
     * // Create many CourseModules
     * const courseModule = await prisma.courseModule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseModuleCreateManyArgs>(args?: SelectSubset<T, CourseModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseModules and returns the data saved in the database.
     * @param {CourseModuleCreateManyAndReturnArgs} args - Arguments to create many CourseModules.
     * @example
     * // Create many CourseModules
     * const courseModule = await prisma.courseModule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseModules and only return the `id`
     * const courseModuleWithIdOnly = await prisma.courseModule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseModule.
     * @param {CourseModuleDeleteArgs} args - Arguments to delete one CourseModule.
     * @example
     * // Delete one CourseModule
     * const CourseModule = await prisma.courseModule.delete({
     *   where: {
     *     // ... filter to delete one CourseModule
     *   }
     * })
     * 
     */
    delete<T extends CourseModuleDeleteArgs>(args: SelectSubset<T, CourseModuleDeleteArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseModule.
     * @param {CourseModuleUpdateArgs} args - Arguments to update one CourseModule.
     * @example
     * // Update one CourseModule
     * const courseModule = await prisma.courseModule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseModuleUpdateArgs>(args: SelectSubset<T, CourseModuleUpdateArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseModules.
     * @param {CourseModuleDeleteManyArgs} args - Arguments to filter CourseModules to delete.
     * @example
     * // Delete a few CourseModules
     * const { count } = await prisma.courseModule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseModuleDeleteManyArgs>(args?: SelectSubset<T, CourseModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseModules
     * const courseModule = await prisma.courseModule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseModuleUpdateManyArgs>(args: SelectSubset<T, CourseModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseModules and returns the data updated in the database.
     * @param {CourseModuleUpdateManyAndReturnArgs} args - Arguments to update many CourseModules.
     * @example
     * // Update many CourseModules
     * const courseModule = await prisma.courseModule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseModules and only return the `id`
     * const courseModuleWithIdOnly = await prisma.courseModule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseModule.
     * @param {CourseModuleUpsertArgs} args - Arguments to update or create a CourseModule.
     * @example
     * // Update or create a CourseModule
     * const courseModule = await prisma.courseModule.upsert({
     *   create: {
     *     // ... data to create a CourseModule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseModule we want to update
     *   }
     * })
     */
    upsert<T extends CourseModuleUpsertArgs>(args: SelectSubset<T, CourseModuleUpsertArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleCountArgs} args - Arguments to filter CourseModules to count.
     * @example
     * // Count the number of CourseModules
     * const count = await prisma.courseModule.count({
     *   where: {
     *     // ... the filter for the CourseModules we want to count
     *   }
     * })
    **/
    count<T extends CourseModuleCountArgs>(
      args?: Subset<T, CourseModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseModuleAggregateArgs>(args: Subset<T, CourseModuleAggregateArgs>): Prisma.PrismaPromise<GetCourseModuleAggregateType<T>>

    /**
     * Group by CourseModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseModuleGroupByArgs['orderBy'] }
        : { orderBy?: CourseModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseModule model
   */
  readonly fields: CourseModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseModule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    encryptedInputs<T extends CourseModule$encryptedInputsArgs<ExtArgs> = {}>(args?: Subset<T, CourseModule$encryptedInputsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseModuleInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseModule model
   */
  interface CourseModuleFieldRefs {
    readonly id: FieldRef<"CourseModule", 'String'>
    readonly courseId: FieldRef<"CourseModule", 'String'>
    readonly moduleSlug: FieldRef<"CourseModule", 'String'>
    readonly createdAt: FieldRef<"CourseModule", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseModule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseModule findUnique
   */
  export type CourseModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * Filter, which CourseModule to fetch.
     */
    where: CourseModuleWhereUniqueInput
  }

  /**
   * CourseModule findUniqueOrThrow
   */
  export type CourseModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * Filter, which CourseModule to fetch.
     */
    where: CourseModuleWhereUniqueInput
  }

  /**
   * CourseModule findFirst
   */
  export type CourseModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * Filter, which CourseModule to fetch.
     */
    where?: CourseModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseModules to fetch.
     */
    orderBy?: CourseModuleOrderByWithRelationInput | CourseModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseModules.
     */
    cursor?: CourseModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseModules.
     */
    distinct?: CourseModuleScalarFieldEnum | CourseModuleScalarFieldEnum[]
  }

  /**
   * CourseModule findFirstOrThrow
   */
  export type CourseModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * Filter, which CourseModule to fetch.
     */
    where?: CourseModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseModules to fetch.
     */
    orderBy?: CourseModuleOrderByWithRelationInput | CourseModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseModules.
     */
    cursor?: CourseModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseModules.
     */
    distinct?: CourseModuleScalarFieldEnum | CourseModuleScalarFieldEnum[]
  }

  /**
   * CourseModule findMany
   */
  export type CourseModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * Filter, which CourseModules to fetch.
     */
    where?: CourseModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseModules to fetch.
     */
    orderBy?: CourseModuleOrderByWithRelationInput | CourseModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseModules.
     */
    cursor?: CourseModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseModules.
     */
    skip?: number
    distinct?: CourseModuleScalarFieldEnum | CourseModuleScalarFieldEnum[]
  }

  /**
   * CourseModule create
   */
  export type CourseModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseModule.
     */
    data: XOR<CourseModuleCreateInput, CourseModuleUncheckedCreateInput>
  }

  /**
   * CourseModule createMany
   */
  export type CourseModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseModules.
     */
    data: CourseModuleCreateManyInput | CourseModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseModule createManyAndReturn
   */
  export type CourseModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * The data used to create many CourseModules.
     */
    data: CourseModuleCreateManyInput | CourseModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseModule update
   */
  export type CourseModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseModule.
     */
    data: XOR<CourseModuleUpdateInput, CourseModuleUncheckedUpdateInput>
    /**
     * Choose, which CourseModule to update.
     */
    where: CourseModuleWhereUniqueInput
  }

  /**
   * CourseModule updateMany
   */
  export type CourseModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseModules.
     */
    data: XOR<CourseModuleUpdateManyMutationInput, CourseModuleUncheckedUpdateManyInput>
    /**
     * Filter which CourseModules to update
     */
    where?: CourseModuleWhereInput
    /**
     * Limit how many CourseModules to update.
     */
    limit?: number
  }

  /**
   * CourseModule updateManyAndReturn
   */
  export type CourseModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * The data used to update CourseModules.
     */
    data: XOR<CourseModuleUpdateManyMutationInput, CourseModuleUncheckedUpdateManyInput>
    /**
     * Filter which CourseModules to update
     */
    where?: CourseModuleWhereInput
    /**
     * Limit how many CourseModules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseModule upsert
   */
  export type CourseModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseModule to update in case it exists.
     */
    where: CourseModuleWhereUniqueInput
    /**
     * In case the CourseModule found by the `where` argument doesn't exist, create a new CourseModule with this data.
     */
    create: XOR<CourseModuleCreateInput, CourseModuleUncheckedCreateInput>
    /**
     * In case the CourseModule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseModuleUpdateInput, CourseModuleUncheckedUpdateInput>
  }

  /**
   * CourseModule delete
   */
  export type CourseModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * Filter which CourseModule to delete.
     */
    where: CourseModuleWhereUniqueInput
  }

  /**
   * CourseModule deleteMany
   */
  export type CourseModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseModules to delete
     */
    where?: CourseModuleWhereInput
    /**
     * Limit how many CourseModules to delete.
     */
    limit?: number
  }

  /**
   * CourseModule.encryptedInputs
   */
  export type CourseModule$encryptedInputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModuleInput
     */
    select?: CourseModuleInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModuleInput
     */
    omit?: CourseModuleInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInputInclude<ExtArgs> | null
    where?: CourseModuleInputWhereInput
    orderBy?: CourseModuleInputOrderByWithRelationInput | CourseModuleInputOrderByWithRelationInput[]
    cursor?: CourseModuleInputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseModuleInputScalarFieldEnum | CourseModuleInputScalarFieldEnum[]
  }

  /**
   * CourseModule without action
   */
  export type CourseModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
  }


  /**
   * Model CourseModuleInput
   */

  export type AggregateCourseModuleInput = {
    _count: CourseModuleInputCountAggregateOutputType | null
    _min: CourseModuleInputMinAggregateOutputType | null
    _max: CourseModuleInputMaxAggregateOutputType | null
  }

  export type CourseModuleInputMinAggregateOutputType = {
    id: string | null
    moduleId: string | null
    inputId: string | null
    encryptedData: string | null
    iv: string | null
  }

  export type CourseModuleInputMaxAggregateOutputType = {
    id: string | null
    moduleId: string | null
    inputId: string | null
    encryptedData: string | null
    iv: string | null
  }

  export type CourseModuleInputCountAggregateOutputType = {
    id: number
    moduleId: number
    inputId: number
    encryptedData: number
    iv: number
    _all: number
  }


  export type CourseModuleInputMinAggregateInputType = {
    id?: true
    moduleId?: true
    inputId?: true
    encryptedData?: true
    iv?: true
  }

  export type CourseModuleInputMaxAggregateInputType = {
    id?: true
    moduleId?: true
    inputId?: true
    encryptedData?: true
    iv?: true
  }

  export type CourseModuleInputCountAggregateInputType = {
    id?: true
    moduleId?: true
    inputId?: true
    encryptedData?: true
    iv?: true
    _all?: true
  }

  export type CourseModuleInputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseModuleInput to aggregate.
     */
    where?: CourseModuleInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseModuleInputs to fetch.
     */
    orderBy?: CourseModuleInputOrderByWithRelationInput | CourseModuleInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseModuleInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseModuleInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseModuleInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseModuleInputs
    **/
    _count?: true | CourseModuleInputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseModuleInputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseModuleInputMaxAggregateInputType
  }

  export type GetCourseModuleInputAggregateType<T extends CourseModuleInputAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseModuleInput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseModuleInput[P]>
      : GetScalarType<T[P], AggregateCourseModuleInput[P]>
  }




  export type CourseModuleInputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseModuleInputWhereInput
    orderBy?: CourseModuleInputOrderByWithAggregationInput | CourseModuleInputOrderByWithAggregationInput[]
    by: CourseModuleInputScalarFieldEnum[] | CourseModuleInputScalarFieldEnum
    having?: CourseModuleInputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseModuleInputCountAggregateInputType | true
    _min?: CourseModuleInputMinAggregateInputType
    _max?: CourseModuleInputMaxAggregateInputType
  }

  export type CourseModuleInputGroupByOutputType = {
    id: string
    moduleId: string
    inputId: string
    encryptedData: string
    iv: string
    _count: CourseModuleInputCountAggregateOutputType | null
    _min: CourseModuleInputMinAggregateOutputType | null
    _max: CourseModuleInputMaxAggregateOutputType | null
  }

  type GetCourseModuleInputGroupByPayload<T extends CourseModuleInputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseModuleInputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseModuleInputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseModuleInputGroupByOutputType[P]>
            : GetScalarType<T[P], CourseModuleInputGroupByOutputType[P]>
        }
      >
    >


  export type CourseModuleInputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    inputId?: boolean
    encryptedData?: boolean
    iv?: boolean
    module?: boolean | CourseModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseModuleInput"]>

  export type CourseModuleInputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    inputId?: boolean
    encryptedData?: boolean
    iv?: boolean
    module?: boolean | CourseModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseModuleInput"]>

  export type CourseModuleInputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    inputId?: boolean
    encryptedData?: boolean
    iv?: boolean
    module?: boolean | CourseModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseModuleInput"]>

  export type CourseModuleInputSelectScalar = {
    id?: boolean
    moduleId?: boolean
    inputId?: boolean
    encryptedData?: boolean
    iv?: boolean
  }

  export type CourseModuleInputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moduleId" | "inputId" | "encryptedData" | "iv", ExtArgs["result"]["courseModuleInput"]>
  export type CourseModuleInputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | CourseModuleDefaultArgs<ExtArgs>
  }
  export type CourseModuleInputIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | CourseModuleDefaultArgs<ExtArgs>
  }
  export type CourseModuleInputIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | CourseModuleDefaultArgs<ExtArgs>
  }

  export type $CourseModuleInputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseModuleInput"
    objects: {
      module: Prisma.$CourseModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      moduleId: string
      inputId: string
      encryptedData: string
      iv: string
    }, ExtArgs["result"]["courseModuleInput"]>
    composites: {}
  }

  type CourseModuleInputGetPayload<S extends boolean | null | undefined | CourseModuleInputDefaultArgs> = $Result.GetResult<Prisma.$CourseModuleInputPayload, S>

  type CourseModuleInputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseModuleInputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseModuleInputCountAggregateInputType | true
    }

  export interface CourseModuleInputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseModuleInput'], meta: { name: 'CourseModuleInput' } }
    /**
     * Find zero or one CourseModuleInput that matches the filter.
     * @param {CourseModuleInputFindUniqueArgs} args - Arguments to find a CourseModuleInput
     * @example
     * // Get one CourseModuleInput
     * const courseModuleInput = await prisma.courseModuleInput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseModuleInputFindUniqueArgs>(args: SelectSubset<T, CourseModuleInputFindUniqueArgs<ExtArgs>>): Prisma__CourseModuleInputClient<$Result.GetResult<Prisma.$CourseModuleInputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseModuleInput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseModuleInputFindUniqueOrThrowArgs} args - Arguments to find a CourseModuleInput
     * @example
     * // Get one CourseModuleInput
     * const courseModuleInput = await prisma.courseModuleInput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseModuleInputFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseModuleInputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseModuleInputClient<$Result.GetResult<Prisma.$CourseModuleInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseModuleInput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleInputFindFirstArgs} args - Arguments to find a CourseModuleInput
     * @example
     * // Get one CourseModuleInput
     * const courseModuleInput = await prisma.courseModuleInput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseModuleInputFindFirstArgs>(args?: SelectSubset<T, CourseModuleInputFindFirstArgs<ExtArgs>>): Prisma__CourseModuleInputClient<$Result.GetResult<Prisma.$CourseModuleInputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseModuleInput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleInputFindFirstOrThrowArgs} args - Arguments to find a CourseModuleInput
     * @example
     * // Get one CourseModuleInput
     * const courseModuleInput = await prisma.courseModuleInput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseModuleInputFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseModuleInputFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseModuleInputClient<$Result.GetResult<Prisma.$CourseModuleInputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseModuleInputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleInputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseModuleInputs
     * const courseModuleInputs = await prisma.courseModuleInput.findMany()
     * 
     * // Get first 10 CourseModuleInputs
     * const courseModuleInputs = await prisma.courseModuleInput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseModuleInputWithIdOnly = await prisma.courseModuleInput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseModuleInputFindManyArgs>(args?: SelectSubset<T, CourseModuleInputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseModuleInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseModuleInput.
     * @param {CourseModuleInputCreateArgs} args - Arguments to create a CourseModuleInput.
     * @example
     * // Create one CourseModuleInput
     * const CourseModuleInput = await prisma.courseModuleInput.create({
     *   data: {
     *     // ... data to create a CourseModuleInput
     *   }
     * })
     * 
     */
    create<T extends CourseModuleInputCreateArgs>(args: SelectSubset<T, CourseModuleInputCreateArgs<ExtArgs>>): Prisma__CourseModuleInputClient<$Result.GetResult<Prisma.$CourseModuleInputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseModuleInputs.
     * @param {CourseModuleInputCreateManyArgs} args - Arguments to create many CourseModuleInputs.
     * @example
     * // Create many CourseModuleInputs
     * const courseModuleInput = await prisma.courseModuleInput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseModuleInputCreateManyArgs>(args?: SelectSubset<T, CourseModuleInputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseModuleInputs and returns the data saved in the database.
     * @param {CourseModuleInputCreateManyAndReturnArgs} args - Arguments to create many CourseModuleInputs.
     * @example
     * // Create many CourseModuleInputs
     * const courseModuleInput = await prisma.courseModuleInput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseModuleInputs and only return the `id`
     * const courseModuleInputWithIdOnly = await prisma.courseModuleInput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseModuleInputCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseModuleInputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseModuleInputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseModuleInput.
     * @param {CourseModuleInputDeleteArgs} args - Arguments to delete one CourseModuleInput.
     * @example
     * // Delete one CourseModuleInput
     * const CourseModuleInput = await prisma.courseModuleInput.delete({
     *   where: {
     *     // ... filter to delete one CourseModuleInput
     *   }
     * })
     * 
     */
    delete<T extends CourseModuleInputDeleteArgs>(args: SelectSubset<T, CourseModuleInputDeleteArgs<ExtArgs>>): Prisma__CourseModuleInputClient<$Result.GetResult<Prisma.$CourseModuleInputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseModuleInput.
     * @param {CourseModuleInputUpdateArgs} args - Arguments to update one CourseModuleInput.
     * @example
     * // Update one CourseModuleInput
     * const courseModuleInput = await prisma.courseModuleInput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseModuleInputUpdateArgs>(args: SelectSubset<T, CourseModuleInputUpdateArgs<ExtArgs>>): Prisma__CourseModuleInputClient<$Result.GetResult<Prisma.$CourseModuleInputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseModuleInputs.
     * @param {CourseModuleInputDeleteManyArgs} args - Arguments to filter CourseModuleInputs to delete.
     * @example
     * // Delete a few CourseModuleInputs
     * const { count } = await prisma.courseModuleInput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseModuleInputDeleteManyArgs>(args?: SelectSubset<T, CourseModuleInputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseModuleInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleInputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseModuleInputs
     * const courseModuleInput = await prisma.courseModuleInput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseModuleInputUpdateManyArgs>(args: SelectSubset<T, CourseModuleInputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseModuleInputs and returns the data updated in the database.
     * @param {CourseModuleInputUpdateManyAndReturnArgs} args - Arguments to update many CourseModuleInputs.
     * @example
     * // Update many CourseModuleInputs
     * const courseModuleInput = await prisma.courseModuleInput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseModuleInputs and only return the `id`
     * const courseModuleInputWithIdOnly = await prisma.courseModuleInput.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseModuleInputUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseModuleInputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseModuleInputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseModuleInput.
     * @param {CourseModuleInputUpsertArgs} args - Arguments to update or create a CourseModuleInput.
     * @example
     * // Update or create a CourseModuleInput
     * const courseModuleInput = await prisma.courseModuleInput.upsert({
     *   create: {
     *     // ... data to create a CourseModuleInput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseModuleInput we want to update
     *   }
     * })
     */
    upsert<T extends CourseModuleInputUpsertArgs>(args: SelectSubset<T, CourseModuleInputUpsertArgs<ExtArgs>>): Prisma__CourseModuleInputClient<$Result.GetResult<Prisma.$CourseModuleInputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseModuleInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleInputCountArgs} args - Arguments to filter CourseModuleInputs to count.
     * @example
     * // Count the number of CourseModuleInputs
     * const count = await prisma.courseModuleInput.count({
     *   where: {
     *     // ... the filter for the CourseModuleInputs we want to count
     *   }
     * })
    **/
    count<T extends CourseModuleInputCountArgs>(
      args?: Subset<T, CourseModuleInputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseModuleInputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseModuleInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleInputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseModuleInputAggregateArgs>(args: Subset<T, CourseModuleInputAggregateArgs>): Prisma.PrismaPromise<GetCourseModuleInputAggregateType<T>>

    /**
     * Group by CourseModuleInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleInputGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseModuleInputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseModuleInputGroupByArgs['orderBy'] }
        : { orderBy?: CourseModuleInputGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseModuleInputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseModuleInputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseModuleInput model
   */
  readonly fields: CourseModuleInputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseModuleInput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseModuleInputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends CourseModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseModuleDefaultArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseModuleInput model
   */
  interface CourseModuleInputFieldRefs {
    readonly id: FieldRef<"CourseModuleInput", 'String'>
    readonly moduleId: FieldRef<"CourseModuleInput", 'String'>
    readonly inputId: FieldRef<"CourseModuleInput", 'String'>
    readonly encryptedData: FieldRef<"CourseModuleInput", 'String'>
    readonly iv: FieldRef<"CourseModuleInput", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CourseModuleInput findUnique
   */
  export type CourseModuleInputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModuleInput
     */
    select?: CourseModuleInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModuleInput
     */
    omit?: CourseModuleInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInputInclude<ExtArgs> | null
    /**
     * Filter, which CourseModuleInput to fetch.
     */
    where: CourseModuleInputWhereUniqueInput
  }

  /**
   * CourseModuleInput findUniqueOrThrow
   */
  export type CourseModuleInputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModuleInput
     */
    select?: CourseModuleInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModuleInput
     */
    omit?: CourseModuleInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInputInclude<ExtArgs> | null
    /**
     * Filter, which CourseModuleInput to fetch.
     */
    where: CourseModuleInputWhereUniqueInput
  }

  /**
   * CourseModuleInput findFirst
   */
  export type CourseModuleInputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModuleInput
     */
    select?: CourseModuleInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModuleInput
     */
    omit?: CourseModuleInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInputInclude<ExtArgs> | null
    /**
     * Filter, which CourseModuleInput to fetch.
     */
    where?: CourseModuleInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseModuleInputs to fetch.
     */
    orderBy?: CourseModuleInputOrderByWithRelationInput | CourseModuleInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseModuleInputs.
     */
    cursor?: CourseModuleInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseModuleInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseModuleInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseModuleInputs.
     */
    distinct?: CourseModuleInputScalarFieldEnum | CourseModuleInputScalarFieldEnum[]
  }

  /**
   * CourseModuleInput findFirstOrThrow
   */
  export type CourseModuleInputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModuleInput
     */
    select?: CourseModuleInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModuleInput
     */
    omit?: CourseModuleInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInputInclude<ExtArgs> | null
    /**
     * Filter, which CourseModuleInput to fetch.
     */
    where?: CourseModuleInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseModuleInputs to fetch.
     */
    orderBy?: CourseModuleInputOrderByWithRelationInput | CourseModuleInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseModuleInputs.
     */
    cursor?: CourseModuleInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseModuleInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseModuleInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseModuleInputs.
     */
    distinct?: CourseModuleInputScalarFieldEnum | CourseModuleInputScalarFieldEnum[]
  }

  /**
   * CourseModuleInput findMany
   */
  export type CourseModuleInputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModuleInput
     */
    select?: CourseModuleInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModuleInput
     */
    omit?: CourseModuleInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInputInclude<ExtArgs> | null
    /**
     * Filter, which CourseModuleInputs to fetch.
     */
    where?: CourseModuleInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseModuleInputs to fetch.
     */
    orderBy?: CourseModuleInputOrderByWithRelationInput | CourseModuleInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseModuleInputs.
     */
    cursor?: CourseModuleInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseModuleInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseModuleInputs.
     */
    skip?: number
    distinct?: CourseModuleInputScalarFieldEnum | CourseModuleInputScalarFieldEnum[]
  }

  /**
   * CourseModuleInput create
   */
  export type CourseModuleInputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModuleInput
     */
    select?: CourseModuleInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModuleInput
     */
    omit?: CourseModuleInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInputInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseModuleInput.
     */
    data: XOR<CourseModuleInputCreateInput, CourseModuleInputUncheckedCreateInput>
  }

  /**
   * CourseModuleInput createMany
   */
  export type CourseModuleInputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseModuleInputs.
     */
    data: CourseModuleInputCreateManyInput | CourseModuleInputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseModuleInput createManyAndReturn
   */
  export type CourseModuleInputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModuleInput
     */
    select?: CourseModuleInputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModuleInput
     */
    omit?: CourseModuleInputOmit<ExtArgs> | null
    /**
     * The data used to create many CourseModuleInputs.
     */
    data: CourseModuleInputCreateManyInput | CourseModuleInputCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInputIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseModuleInput update
   */
  export type CourseModuleInputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModuleInput
     */
    select?: CourseModuleInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModuleInput
     */
    omit?: CourseModuleInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInputInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseModuleInput.
     */
    data: XOR<CourseModuleInputUpdateInput, CourseModuleInputUncheckedUpdateInput>
    /**
     * Choose, which CourseModuleInput to update.
     */
    where: CourseModuleInputWhereUniqueInput
  }

  /**
   * CourseModuleInput updateMany
   */
  export type CourseModuleInputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseModuleInputs.
     */
    data: XOR<CourseModuleInputUpdateManyMutationInput, CourseModuleInputUncheckedUpdateManyInput>
    /**
     * Filter which CourseModuleInputs to update
     */
    where?: CourseModuleInputWhereInput
    /**
     * Limit how many CourseModuleInputs to update.
     */
    limit?: number
  }

  /**
   * CourseModuleInput updateManyAndReturn
   */
  export type CourseModuleInputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModuleInput
     */
    select?: CourseModuleInputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModuleInput
     */
    omit?: CourseModuleInputOmit<ExtArgs> | null
    /**
     * The data used to update CourseModuleInputs.
     */
    data: XOR<CourseModuleInputUpdateManyMutationInput, CourseModuleInputUncheckedUpdateManyInput>
    /**
     * Filter which CourseModuleInputs to update
     */
    where?: CourseModuleInputWhereInput
    /**
     * Limit how many CourseModuleInputs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInputIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseModuleInput upsert
   */
  export type CourseModuleInputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModuleInput
     */
    select?: CourseModuleInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModuleInput
     */
    omit?: CourseModuleInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInputInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseModuleInput to update in case it exists.
     */
    where: CourseModuleInputWhereUniqueInput
    /**
     * In case the CourseModuleInput found by the `where` argument doesn't exist, create a new CourseModuleInput with this data.
     */
    create: XOR<CourseModuleInputCreateInput, CourseModuleInputUncheckedCreateInput>
    /**
     * In case the CourseModuleInput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseModuleInputUpdateInput, CourseModuleInputUncheckedUpdateInput>
  }

  /**
   * CourseModuleInput delete
   */
  export type CourseModuleInputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModuleInput
     */
    select?: CourseModuleInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModuleInput
     */
    omit?: CourseModuleInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInputInclude<ExtArgs> | null
    /**
     * Filter which CourseModuleInput to delete.
     */
    where: CourseModuleInputWhereUniqueInput
  }

  /**
   * CourseModuleInput deleteMany
   */
  export type CourseModuleInputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseModuleInputs to delete
     */
    where?: CourseModuleInputWhereInput
    /**
     * Limit how many CourseModuleInputs to delete.
     */
    limit?: number
  }

  /**
   * CourseModuleInput without action
   */
  export type CourseModuleInputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModuleInput
     */
    select?: CourseModuleInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModuleInput
     */
    omit?: CourseModuleInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInputInclude<ExtArgs> | null
  }


  /**
   * Model CourseResourceStatus
   */

  export type AggregateCourseResourceStatus = {
    _count: CourseResourceStatusCountAggregateOutputType | null
    _min: CourseResourceStatusMinAggregateOutputType | null
    _max: CourseResourceStatusMaxAggregateOutputType | null
  }

  export type CourseResourceStatusMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    resourceName: string | null
    completed: boolean | null
    completedAt: Date | null
  }

  export type CourseResourceStatusMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    resourceName: string | null
    completed: boolean | null
    completedAt: Date | null
  }

  export type CourseResourceStatusCountAggregateOutputType = {
    id: number
    courseId: number
    resourceName: number
    completed: number
    completedAt: number
    _all: number
  }


  export type CourseResourceStatusMinAggregateInputType = {
    id?: true
    courseId?: true
    resourceName?: true
    completed?: true
    completedAt?: true
  }

  export type CourseResourceStatusMaxAggregateInputType = {
    id?: true
    courseId?: true
    resourceName?: true
    completed?: true
    completedAt?: true
  }

  export type CourseResourceStatusCountAggregateInputType = {
    id?: true
    courseId?: true
    resourceName?: true
    completed?: true
    completedAt?: true
    _all?: true
  }

  export type CourseResourceStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseResourceStatus to aggregate.
     */
    where?: CourseResourceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseResourceStatuses to fetch.
     */
    orderBy?: CourseResourceStatusOrderByWithRelationInput | CourseResourceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseResourceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseResourceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseResourceStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseResourceStatuses
    **/
    _count?: true | CourseResourceStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseResourceStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseResourceStatusMaxAggregateInputType
  }

  export type GetCourseResourceStatusAggregateType<T extends CourseResourceStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseResourceStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseResourceStatus[P]>
      : GetScalarType<T[P], AggregateCourseResourceStatus[P]>
  }




  export type CourseResourceStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseResourceStatusWhereInput
    orderBy?: CourseResourceStatusOrderByWithAggregationInput | CourseResourceStatusOrderByWithAggregationInput[]
    by: CourseResourceStatusScalarFieldEnum[] | CourseResourceStatusScalarFieldEnum
    having?: CourseResourceStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseResourceStatusCountAggregateInputType | true
    _min?: CourseResourceStatusMinAggregateInputType
    _max?: CourseResourceStatusMaxAggregateInputType
  }

  export type CourseResourceStatusGroupByOutputType = {
    id: string
    courseId: string
    resourceName: string
    completed: boolean
    completedAt: Date | null
    _count: CourseResourceStatusCountAggregateOutputType | null
    _min: CourseResourceStatusMinAggregateOutputType | null
    _max: CourseResourceStatusMaxAggregateOutputType | null
  }

  type GetCourseResourceStatusGroupByPayload<T extends CourseResourceStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseResourceStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseResourceStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseResourceStatusGroupByOutputType[P]>
            : GetScalarType<T[P], CourseResourceStatusGroupByOutputType[P]>
        }
      >
    >


  export type CourseResourceStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    resourceName?: boolean
    completed?: boolean
    completedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseResourceStatus"]>

  export type CourseResourceStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    resourceName?: boolean
    completed?: boolean
    completedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseResourceStatus"]>

  export type CourseResourceStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    resourceName?: boolean
    completed?: boolean
    completedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseResourceStatus"]>

  export type CourseResourceStatusSelectScalar = {
    id?: boolean
    courseId?: boolean
    resourceName?: boolean
    completed?: boolean
    completedAt?: boolean
  }

  export type CourseResourceStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "resourceName" | "completed" | "completedAt", ExtArgs["result"]["courseResourceStatus"]>
  export type CourseResourceStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseResourceStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseResourceStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseResourceStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseResourceStatus"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      resourceName: string
      completed: boolean
      completedAt: Date | null
    }, ExtArgs["result"]["courseResourceStatus"]>
    composites: {}
  }

  type CourseResourceStatusGetPayload<S extends boolean | null | undefined | CourseResourceStatusDefaultArgs> = $Result.GetResult<Prisma.$CourseResourceStatusPayload, S>

  type CourseResourceStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseResourceStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseResourceStatusCountAggregateInputType | true
    }

  export interface CourseResourceStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseResourceStatus'], meta: { name: 'CourseResourceStatus' } }
    /**
     * Find zero or one CourseResourceStatus that matches the filter.
     * @param {CourseResourceStatusFindUniqueArgs} args - Arguments to find a CourseResourceStatus
     * @example
     * // Get one CourseResourceStatus
     * const courseResourceStatus = await prisma.courseResourceStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseResourceStatusFindUniqueArgs>(args: SelectSubset<T, CourseResourceStatusFindUniqueArgs<ExtArgs>>): Prisma__CourseResourceStatusClient<$Result.GetResult<Prisma.$CourseResourceStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseResourceStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseResourceStatusFindUniqueOrThrowArgs} args - Arguments to find a CourseResourceStatus
     * @example
     * // Get one CourseResourceStatus
     * const courseResourceStatus = await prisma.courseResourceStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseResourceStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseResourceStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseResourceStatusClient<$Result.GetResult<Prisma.$CourseResourceStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseResourceStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseResourceStatusFindFirstArgs} args - Arguments to find a CourseResourceStatus
     * @example
     * // Get one CourseResourceStatus
     * const courseResourceStatus = await prisma.courseResourceStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseResourceStatusFindFirstArgs>(args?: SelectSubset<T, CourseResourceStatusFindFirstArgs<ExtArgs>>): Prisma__CourseResourceStatusClient<$Result.GetResult<Prisma.$CourseResourceStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseResourceStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseResourceStatusFindFirstOrThrowArgs} args - Arguments to find a CourseResourceStatus
     * @example
     * // Get one CourseResourceStatus
     * const courseResourceStatus = await prisma.courseResourceStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseResourceStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseResourceStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseResourceStatusClient<$Result.GetResult<Prisma.$CourseResourceStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseResourceStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseResourceStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseResourceStatuses
     * const courseResourceStatuses = await prisma.courseResourceStatus.findMany()
     * 
     * // Get first 10 CourseResourceStatuses
     * const courseResourceStatuses = await prisma.courseResourceStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseResourceStatusWithIdOnly = await prisma.courseResourceStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseResourceStatusFindManyArgs>(args?: SelectSubset<T, CourseResourceStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseResourceStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseResourceStatus.
     * @param {CourseResourceStatusCreateArgs} args - Arguments to create a CourseResourceStatus.
     * @example
     * // Create one CourseResourceStatus
     * const CourseResourceStatus = await prisma.courseResourceStatus.create({
     *   data: {
     *     // ... data to create a CourseResourceStatus
     *   }
     * })
     * 
     */
    create<T extends CourseResourceStatusCreateArgs>(args: SelectSubset<T, CourseResourceStatusCreateArgs<ExtArgs>>): Prisma__CourseResourceStatusClient<$Result.GetResult<Prisma.$CourseResourceStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseResourceStatuses.
     * @param {CourseResourceStatusCreateManyArgs} args - Arguments to create many CourseResourceStatuses.
     * @example
     * // Create many CourseResourceStatuses
     * const courseResourceStatus = await prisma.courseResourceStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseResourceStatusCreateManyArgs>(args?: SelectSubset<T, CourseResourceStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseResourceStatuses and returns the data saved in the database.
     * @param {CourseResourceStatusCreateManyAndReturnArgs} args - Arguments to create many CourseResourceStatuses.
     * @example
     * // Create many CourseResourceStatuses
     * const courseResourceStatus = await prisma.courseResourceStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseResourceStatuses and only return the `id`
     * const courseResourceStatusWithIdOnly = await prisma.courseResourceStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseResourceStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseResourceStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseResourceStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseResourceStatus.
     * @param {CourseResourceStatusDeleteArgs} args - Arguments to delete one CourseResourceStatus.
     * @example
     * // Delete one CourseResourceStatus
     * const CourseResourceStatus = await prisma.courseResourceStatus.delete({
     *   where: {
     *     // ... filter to delete one CourseResourceStatus
     *   }
     * })
     * 
     */
    delete<T extends CourseResourceStatusDeleteArgs>(args: SelectSubset<T, CourseResourceStatusDeleteArgs<ExtArgs>>): Prisma__CourseResourceStatusClient<$Result.GetResult<Prisma.$CourseResourceStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseResourceStatus.
     * @param {CourseResourceStatusUpdateArgs} args - Arguments to update one CourseResourceStatus.
     * @example
     * // Update one CourseResourceStatus
     * const courseResourceStatus = await prisma.courseResourceStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseResourceStatusUpdateArgs>(args: SelectSubset<T, CourseResourceStatusUpdateArgs<ExtArgs>>): Prisma__CourseResourceStatusClient<$Result.GetResult<Prisma.$CourseResourceStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseResourceStatuses.
     * @param {CourseResourceStatusDeleteManyArgs} args - Arguments to filter CourseResourceStatuses to delete.
     * @example
     * // Delete a few CourseResourceStatuses
     * const { count } = await prisma.courseResourceStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseResourceStatusDeleteManyArgs>(args?: SelectSubset<T, CourseResourceStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseResourceStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseResourceStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseResourceStatuses
     * const courseResourceStatus = await prisma.courseResourceStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseResourceStatusUpdateManyArgs>(args: SelectSubset<T, CourseResourceStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseResourceStatuses and returns the data updated in the database.
     * @param {CourseResourceStatusUpdateManyAndReturnArgs} args - Arguments to update many CourseResourceStatuses.
     * @example
     * // Update many CourseResourceStatuses
     * const courseResourceStatus = await prisma.courseResourceStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseResourceStatuses and only return the `id`
     * const courseResourceStatusWithIdOnly = await prisma.courseResourceStatus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseResourceStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseResourceStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseResourceStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseResourceStatus.
     * @param {CourseResourceStatusUpsertArgs} args - Arguments to update or create a CourseResourceStatus.
     * @example
     * // Update or create a CourseResourceStatus
     * const courseResourceStatus = await prisma.courseResourceStatus.upsert({
     *   create: {
     *     // ... data to create a CourseResourceStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseResourceStatus we want to update
     *   }
     * })
     */
    upsert<T extends CourseResourceStatusUpsertArgs>(args: SelectSubset<T, CourseResourceStatusUpsertArgs<ExtArgs>>): Prisma__CourseResourceStatusClient<$Result.GetResult<Prisma.$CourseResourceStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseResourceStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseResourceStatusCountArgs} args - Arguments to filter CourseResourceStatuses to count.
     * @example
     * // Count the number of CourseResourceStatuses
     * const count = await prisma.courseResourceStatus.count({
     *   where: {
     *     // ... the filter for the CourseResourceStatuses we want to count
     *   }
     * })
    **/
    count<T extends CourseResourceStatusCountArgs>(
      args?: Subset<T, CourseResourceStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseResourceStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseResourceStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseResourceStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseResourceStatusAggregateArgs>(args: Subset<T, CourseResourceStatusAggregateArgs>): Prisma.PrismaPromise<GetCourseResourceStatusAggregateType<T>>

    /**
     * Group by CourseResourceStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseResourceStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseResourceStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseResourceStatusGroupByArgs['orderBy'] }
        : { orderBy?: CourseResourceStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseResourceStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseResourceStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseResourceStatus model
   */
  readonly fields: CourseResourceStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseResourceStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseResourceStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseResourceStatus model
   */
  interface CourseResourceStatusFieldRefs {
    readonly id: FieldRef<"CourseResourceStatus", 'String'>
    readonly courseId: FieldRef<"CourseResourceStatus", 'String'>
    readonly resourceName: FieldRef<"CourseResourceStatus", 'String'>
    readonly completed: FieldRef<"CourseResourceStatus", 'Boolean'>
    readonly completedAt: FieldRef<"CourseResourceStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseResourceStatus findUnique
   */
  export type CourseResourceStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResourceStatus
     */
    select?: CourseResourceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResourceStatus
     */
    omit?: CourseResourceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceStatusInclude<ExtArgs> | null
    /**
     * Filter, which CourseResourceStatus to fetch.
     */
    where: CourseResourceStatusWhereUniqueInput
  }

  /**
   * CourseResourceStatus findUniqueOrThrow
   */
  export type CourseResourceStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResourceStatus
     */
    select?: CourseResourceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResourceStatus
     */
    omit?: CourseResourceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceStatusInclude<ExtArgs> | null
    /**
     * Filter, which CourseResourceStatus to fetch.
     */
    where: CourseResourceStatusWhereUniqueInput
  }

  /**
   * CourseResourceStatus findFirst
   */
  export type CourseResourceStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResourceStatus
     */
    select?: CourseResourceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResourceStatus
     */
    omit?: CourseResourceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceStatusInclude<ExtArgs> | null
    /**
     * Filter, which CourseResourceStatus to fetch.
     */
    where?: CourseResourceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseResourceStatuses to fetch.
     */
    orderBy?: CourseResourceStatusOrderByWithRelationInput | CourseResourceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseResourceStatuses.
     */
    cursor?: CourseResourceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseResourceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseResourceStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseResourceStatuses.
     */
    distinct?: CourseResourceStatusScalarFieldEnum | CourseResourceStatusScalarFieldEnum[]
  }

  /**
   * CourseResourceStatus findFirstOrThrow
   */
  export type CourseResourceStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResourceStatus
     */
    select?: CourseResourceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResourceStatus
     */
    omit?: CourseResourceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceStatusInclude<ExtArgs> | null
    /**
     * Filter, which CourseResourceStatus to fetch.
     */
    where?: CourseResourceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseResourceStatuses to fetch.
     */
    orderBy?: CourseResourceStatusOrderByWithRelationInput | CourseResourceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseResourceStatuses.
     */
    cursor?: CourseResourceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseResourceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseResourceStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseResourceStatuses.
     */
    distinct?: CourseResourceStatusScalarFieldEnum | CourseResourceStatusScalarFieldEnum[]
  }

  /**
   * CourseResourceStatus findMany
   */
  export type CourseResourceStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResourceStatus
     */
    select?: CourseResourceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResourceStatus
     */
    omit?: CourseResourceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceStatusInclude<ExtArgs> | null
    /**
     * Filter, which CourseResourceStatuses to fetch.
     */
    where?: CourseResourceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseResourceStatuses to fetch.
     */
    orderBy?: CourseResourceStatusOrderByWithRelationInput | CourseResourceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseResourceStatuses.
     */
    cursor?: CourseResourceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseResourceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseResourceStatuses.
     */
    skip?: number
    distinct?: CourseResourceStatusScalarFieldEnum | CourseResourceStatusScalarFieldEnum[]
  }

  /**
   * CourseResourceStatus create
   */
  export type CourseResourceStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResourceStatus
     */
    select?: CourseResourceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResourceStatus
     */
    omit?: CourseResourceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseResourceStatus.
     */
    data: XOR<CourseResourceStatusCreateInput, CourseResourceStatusUncheckedCreateInput>
  }

  /**
   * CourseResourceStatus createMany
   */
  export type CourseResourceStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseResourceStatuses.
     */
    data: CourseResourceStatusCreateManyInput | CourseResourceStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseResourceStatus createManyAndReturn
   */
  export type CourseResourceStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResourceStatus
     */
    select?: CourseResourceStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResourceStatus
     */
    omit?: CourseResourceStatusOmit<ExtArgs> | null
    /**
     * The data used to create many CourseResourceStatuses.
     */
    data: CourseResourceStatusCreateManyInput | CourseResourceStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseResourceStatus update
   */
  export type CourseResourceStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResourceStatus
     */
    select?: CourseResourceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResourceStatus
     */
    omit?: CourseResourceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseResourceStatus.
     */
    data: XOR<CourseResourceStatusUpdateInput, CourseResourceStatusUncheckedUpdateInput>
    /**
     * Choose, which CourseResourceStatus to update.
     */
    where: CourseResourceStatusWhereUniqueInput
  }

  /**
   * CourseResourceStatus updateMany
   */
  export type CourseResourceStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseResourceStatuses.
     */
    data: XOR<CourseResourceStatusUpdateManyMutationInput, CourseResourceStatusUncheckedUpdateManyInput>
    /**
     * Filter which CourseResourceStatuses to update
     */
    where?: CourseResourceStatusWhereInput
    /**
     * Limit how many CourseResourceStatuses to update.
     */
    limit?: number
  }

  /**
   * CourseResourceStatus updateManyAndReturn
   */
  export type CourseResourceStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResourceStatus
     */
    select?: CourseResourceStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResourceStatus
     */
    omit?: CourseResourceStatusOmit<ExtArgs> | null
    /**
     * The data used to update CourseResourceStatuses.
     */
    data: XOR<CourseResourceStatusUpdateManyMutationInput, CourseResourceStatusUncheckedUpdateManyInput>
    /**
     * Filter which CourseResourceStatuses to update
     */
    where?: CourseResourceStatusWhereInput
    /**
     * Limit how many CourseResourceStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseResourceStatus upsert
   */
  export type CourseResourceStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResourceStatus
     */
    select?: CourseResourceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResourceStatus
     */
    omit?: CourseResourceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseResourceStatus to update in case it exists.
     */
    where: CourseResourceStatusWhereUniqueInput
    /**
     * In case the CourseResourceStatus found by the `where` argument doesn't exist, create a new CourseResourceStatus with this data.
     */
    create: XOR<CourseResourceStatusCreateInput, CourseResourceStatusUncheckedCreateInput>
    /**
     * In case the CourseResourceStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseResourceStatusUpdateInput, CourseResourceStatusUncheckedUpdateInput>
  }

  /**
   * CourseResourceStatus delete
   */
  export type CourseResourceStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResourceStatus
     */
    select?: CourseResourceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResourceStatus
     */
    omit?: CourseResourceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceStatusInclude<ExtArgs> | null
    /**
     * Filter which CourseResourceStatus to delete.
     */
    where: CourseResourceStatusWhereUniqueInput
  }

  /**
   * CourseResourceStatus deleteMany
   */
  export type CourseResourceStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseResourceStatuses to delete
     */
    where?: CourseResourceStatusWhereInput
    /**
     * Limit how many CourseResourceStatuses to delete.
     */
    limit?: number
  }

  /**
   * CourseResourceStatus without action
   */
  export type CourseResourceStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResourceStatus
     */
    select?: CourseResourceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResourceStatus
     */
    omit?: CourseResourceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceStatusInclude<ExtArgs> | null
  }


  /**
   * Model RecommendedArticle
   */

  export type AggregateRecommendedArticle = {
    _count: RecommendedArticleCountAggregateOutputType | null
    _min: RecommendedArticleMinAggregateOutputType | null
    _max: RecommendedArticleMaxAggregateOutputType | null
  }

  export type RecommendedArticleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    articleSlug: string | null
    createdAt: Date | null
  }

  export type RecommendedArticleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    articleSlug: string | null
    createdAt: Date | null
  }

  export type RecommendedArticleCountAggregateOutputType = {
    id: number
    userId: number
    articleSlug: number
    createdAt: number
    _all: number
  }


  export type RecommendedArticleMinAggregateInputType = {
    id?: true
    userId?: true
    articleSlug?: true
    createdAt?: true
  }

  export type RecommendedArticleMaxAggregateInputType = {
    id?: true
    userId?: true
    articleSlug?: true
    createdAt?: true
  }

  export type RecommendedArticleCountAggregateInputType = {
    id?: true
    userId?: true
    articleSlug?: true
    createdAt?: true
    _all?: true
  }

  export type RecommendedArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecommendedArticle to aggregate.
     */
    where?: RecommendedArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendedArticles to fetch.
     */
    orderBy?: RecommendedArticleOrderByWithRelationInput | RecommendedArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendedArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendedArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendedArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecommendedArticles
    **/
    _count?: true | RecommendedArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendedArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendedArticleMaxAggregateInputType
  }

  export type GetRecommendedArticleAggregateType<T extends RecommendedArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendedArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendedArticle[P]>
      : GetScalarType<T[P], AggregateRecommendedArticle[P]>
  }




  export type RecommendedArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendedArticleWhereInput
    orderBy?: RecommendedArticleOrderByWithAggregationInput | RecommendedArticleOrderByWithAggregationInput[]
    by: RecommendedArticleScalarFieldEnum[] | RecommendedArticleScalarFieldEnum
    having?: RecommendedArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendedArticleCountAggregateInputType | true
    _min?: RecommendedArticleMinAggregateInputType
    _max?: RecommendedArticleMaxAggregateInputType
  }

  export type RecommendedArticleGroupByOutputType = {
    id: string
    userId: string
    articleSlug: string
    createdAt: Date
    _count: RecommendedArticleCountAggregateOutputType | null
    _min: RecommendedArticleMinAggregateOutputType | null
    _max: RecommendedArticleMaxAggregateOutputType | null
  }

  type GetRecommendedArticleGroupByPayload<T extends RecommendedArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendedArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendedArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendedArticleGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendedArticleGroupByOutputType[P]>
        }
      >
    >


  export type RecommendedArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleSlug?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendedArticle"]>

  export type RecommendedArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleSlug?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendedArticle"]>

  export type RecommendedArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleSlug?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendedArticle"]>

  export type RecommendedArticleSelectScalar = {
    id?: boolean
    userId?: boolean
    articleSlug?: boolean
    createdAt?: boolean
  }

  export type RecommendedArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "articleSlug" | "createdAt", ExtArgs["result"]["recommendedArticle"]>
  export type RecommendedArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecommendedArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecommendedArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecommendedArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecommendedArticle"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      articleSlug: string
      createdAt: Date
    }, ExtArgs["result"]["recommendedArticle"]>
    composites: {}
  }

  type RecommendedArticleGetPayload<S extends boolean | null | undefined | RecommendedArticleDefaultArgs> = $Result.GetResult<Prisma.$RecommendedArticlePayload, S>

  type RecommendedArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecommendedArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecommendedArticleCountAggregateInputType | true
    }

  export interface RecommendedArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecommendedArticle'], meta: { name: 'RecommendedArticle' } }
    /**
     * Find zero or one RecommendedArticle that matches the filter.
     * @param {RecommendedArticleFindUniqueArgs} args - Arguments to find a RecommendedArticle
     * @example
     * // Get one RecommendedArticle
     * const recommendedArticle = await prisma.recommendedArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendedArticleFindUniqueArgs>(args: SelectSubset<T, RecommendedArticleFindUniqueArgs<ExtArgs>>): Prisma__RecommendedArticleClient<$Result.GetResult<Prisma.$RecommendedArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecommendedArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecommendedArticleFindUniqueOrThrowArgs} args - Arguments to find a RecommendedArticle
     * @example
     * // Get one RecommendedArticle
     * const recommendedArticle = await prisma.recommendedArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendedArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendedArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendedArticleClient<$Result.GetResult<Prisma.$RecommendedArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecommendedArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendedArticleFindFirstArgs} args - Arguments to find a RecommendedArticle
     * @example
     * // Get one RecommendedArticle
     * const recommendedArticle = await prisma.recommendedArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendedArticleFindFirstArgs>(args?: SelectSubset<T, RecommendedArticleFindFirstArgs<ExtArgs>>): Prisma__RecommendedArticleClient<$Result.GetResult<Prisma.$RecommendedArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecommendedArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendedArticleFindFirstOrThrowArgs} args - Arguments to find a RecommendedArticle
     * @example
     * // Get one RecommendedArticle
     * const recommendedArticle = await prisma.recommendedArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendedArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendedArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendedArticleClient<$Result.GetResult<Prisma.$RecommendedArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecommendedArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendedArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecommendedArticles
     * const recommendedArticles = await prisma.recommendedArticle.findMany()
     * 
     * // Get first 10 RecommendedArticles
     * const recommendedArticles = await prisma.recommendedArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendedArticleWithIdOnly = await prisma.recommendedArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendedArticleFindManyArgs>(args?: SelectSubset<T, RecommendedArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendedArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecommendedArticle.
     * @param {RecommendedArticleCreateArgs} args - Arguments to create a RecommendedArticle.
     * @example
     * // Create one RecommendedArticle
     * const RecommendedArticle = await prisma.recommendedArticle.create({
     *   data: {
     *     // ... data to create a RecommendedArticle
     *   }
     * })
     * 
     */
    create<T extends RecommendedArticleCreateArgs>(args: SelectSubset<T, RecommendedArticleCreateArgs<ExtArgs>>): Prisma__RecommendedArticleClient<$Result.GetResult<Prisma.$RecommendedArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecommendedArticles.
     * @param {RecommendedArticleCreateManyArgs} args - Arguments to create many RecommendedArticles.
     * @example
     * // Create many RecommendedArticles
     * const recommendedArticle = await prisma.recommendedArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendedArticleCreateManyArgs>(args?: SelectSubset<T, RecommendedArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecommendedArticles and returns the data saved in the database.
     * @param {RecommendedArticleCreateManyAndReturnArgs} args - Arguments to create many RecommendedArticles.
     * @example
     * // Create many RecommendedArticles
     * const recommendedArticle = await prisma.recommendedArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecommendedArticles and only return the `id`
     * const recommendedArticleWithIdOnly = await prisma.recommendedArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendedArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendedArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendedArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecommendedArticle.
     * @param {RecommendedArticleDeleteArgs} args - Arguments to delete one RecommendedArticle.
     * @example
     * // Delete one RecommendedArticle
     * const RecommendedArticle = await prisma.recommendedArticle.delete({
     *   where: {
     *     // ... filter to delete one RecommendedArticle
     *   }
     * })
     * 
     */
    delete<T extends RecommendedArticleDeleteArgs>(args: SelectSubset<T, RecommendedArticleDeleteArgs<ExtArgs>>): Prisma__RecommendedArticleClient<$Result.GetResult<Prisma.$RecommendedArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecommendedArticle.
     * @param {RecommendedArticleUpdateArgs} args - Arguments to update one RecommendedArticle.
     * @example
     * // Update one RecommendedArticle
     * const recommendedArticle = await prisma.recommendedArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendedArticleUpdateArgs>(args: SelectSubset<T, RecommendedArticleUpdateArgs<ExtArgs>>): Prisma__RecommendedArticleClient<$Result.GetResult<Prisma.$RecommendedArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecommendedArticles.
     * @param {RecommendedArticleDeleteManyArgs} args - Arguments to filter RecommendedArticles to delete.
     * @example
     * // Delete a few RecommendedArticles
     * const { count } = await prisma.recommendedArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendedArticleDeleteManyArgs>(args?: SelectSubset<T, RecommendedArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecommendedArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendedArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecommendedArticles
     * const recommendedArticle = await prisma.recommendedArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendedArticleUpdateManyArgs>(args: SelectSubset<T, RecommendedArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecommendedArticles and returns the data updated in the database.
     * @param {RecommendedArticleUpdateManyAndReturnArgs} args - Arguments to update many RecommendedArticles.
     * @example
     * // Update many RecommendedArticles
     * const recommendedArticle = await prisma.recommendedArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecommendedArticles and only return the `id`
     * const recommendedArticleWithIdOnly = await prisma.recommendedArticle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecommendedArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, RecommendedArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendedArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecommendedArticle.
     * @param {RecommendedArticleUpsertArgs} args - Arguments to update or create a RecommendedArticle.
     * @example
     * // Update or create a RecommendedArticle
     * const recommendedArticle = await prisma.recommendedArticle.upsert({
     *   create: {
     *     // ... data to create a RecommendedArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecommendedArticle we want to update
     *   }
     * })
     */
    upsert<T extends RecommendedArticleUpsertArgs>(args: SelectSubset<T, RecommendedArticleUpsertArgs<ExtArgs>>): Prisma__RecommendedArticleClient<$Result.GetResult<Prisma.$RecommendedArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecommendedArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendedArticleCountArgs} args - Arguments to filter RecommendedArticles to count.
     * @example
     * // Count the number of RecommendedArticles
     * const count = await prisma.recommendedArticle.count({
     *   where: {
     *     // ... the filter for the RecommendedArticles we want to count
     *   }
     * })
    **/
    count<T extends RecommendedArticleCountArgs>(
      args?: Subset<T, RecommendedArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendedArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecommendedArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendedArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecommendedArticleAggregateArgs>(args: Subset<T, RecommendedArticleAggregateArgs>): Prisma.PrismaPromise<GetRecommendedArticleAggregateType<T>>

    /**
     * Group by RecommendedArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendedArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecommendedArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendedArticleGroupByArgs['orderBy'] }
        : { orderBy?: RecommendedArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecommendedArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendedArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecommendedArticle model
   */
  readonly fields: RecommendedArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecommendedArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendedArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecommendedArticle model
   */
  interface RecommendedArticleFieldRefs {
    readonly id: FieldRef<"RecommendedArticle", 'String'>
    readonly userId: FieldRef<"RecommendedArticle", 'String'>
    readonly articleSlug: FieldRef<"RecommendedArticle", 'String'>
    readonly createdAt: FieldRef<"RecommendedArticle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecommendedArticle findUnique
   */
  export type RecommendedArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedArticle
     */
    select?: RecommendedArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedArticle
     */
    omit?: RecommendedArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedArticleInclude<ExtArgs> | null
    /**
     * Filter, which RecommendedArticle to fetch.
     */
    where: RecommendedArticleWhereUniqueInput
  }

  /**
   * RecommendedArticle findUniqueOrThrow
   */
  export type RecommendedArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedArticle
     */
    select?: RecommendedArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedArticle
     */
    omit?: RecommendedArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedArticleInclude<ExtArgs> | null
    /**
     * Filter, which RecommendedArticle to fetch.
     */
    where: RecommendedArticleWhereUniqueInput
  }

  /**
   * RecommendedArticle findFirst
   */
  export type RecommendedArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedArticle
     */
    select?: RecommendedArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedArticle
     */
    omit?: RecommendedArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedArticleInclude<ExtArgs> | null
    /**
     * Filter, which RecommendedArticle to fetch.
     */
    where?: RecommendedArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendedArticles to fetch.
     */
    orderBy?: RecommendedArticleOrderByWithRelationInput | RecommendedArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecommendedArticles.
     */
    cursor?: RecommendedArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendedArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendedArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecommendedArticles.
     */
    distinct?: RecommendedArticleScalarFieldEnum | RecommendedArticleScalarFieldEnum[]
  }

  /**
   * RecommendedArticle findFirstOrThrow
   */
  export type RecommendedArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedArticle
     */
    select?: RecommendedArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedArticle
     */
    omit?: RecommendedArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedArticleInclude<ExtArgs> | null
    /**
     * Filter, which RecommendedArticle to fetch.
     */
    where?: RecommendedArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendedArticles to fetch.
     */
    orderBy?: RecommendedArticleOrderByWithRelationInput | RecommendedArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecommendedArticles.
     */
    cursor?: RecommendedArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendedArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendedArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecommendedArticles.
     */
    distinct?: RecommendedArticleScalarFieldEnum | RecommendedArticleScalarFieldEnum[]
  }

  /**
   * RecommendedArticle findMany
   */
  export type RecommendedArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedArticle
     */
    select?: RecommendedArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedArticle
     */
    omit?: RecommendedArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedArticleInclude<ExtArgs> | null
    /**
     * Filter, which RecommendedArticles to fetch.
     */
    where?: RecommendedArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendedArticles to fetch.
     */
    orderBy?: RecommendedArticleOrderByWithRelationInput | RecommendedArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecommendedArticles.
     */
    cursor?: RecommendedArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendedArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendedArticles.
     */
    skip?: number
    distinct?: RecommendedArticleScalarFieldEnum | RecommendedArticleScalarFieldEnum[]
  }

  /**
   * RecommendedArticle create
   */
  export type RecommendedArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedArticle
     */
    select?: RecommendedArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedArticle
     */
    omit?: RecommendedArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a RecommendedArticle.
     */
    data: XOR<RecommendedArticleCreateInput, RecommendedArticleUncheckedCreateInput>
  }

  /**
   * RecommendedArticle createMany
   */
  export type RecommendedArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecommendedArticles.
     */
    data: RecommendedArticleCreateManyInput | RecommendedArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecommendedArticle createManyAndReturn
   */
  export type RecommendedArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedArticle
     */
    select?: RecommendedArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedArticle
     */
    omit?: RecommendedArticleOmit<ExtArgs> | null
    /**
     * The data used to create many RecommendedArticles.
     */
    data: RecommendedArticleCreateManyInput | RecommendedArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecommendedArticle update
   */
  export type RecommendedArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedArticle
     */
    select?: RecommendedArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedArticle
     */
    omit?: RecommendedArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a RecommendedArticle.
     */
    data: XOR<RecommendedArticleUpdateInput, RecommendedArticleUncheckedUpdateInput>
    /**
     * Choose, which RecommendedArticle to update.
     */
    where: RecommendedArticleWhereUniqueInput
  }

  /**
   * RecommendedArticle updateMany
   */
  export type RecommendedArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecommendedArticles.
     */
    data: XOR<RecommendedArticleUpdateManyMutationInput, RecommendedArticleUncheckedUpdateManyInput>
    /**
     * Filter which RecommendedArticles to update
     */
    where?: RecommendedArticleWhereInput
    /**
     * Limit how many RecommendedArticles to update.
     */
    limit?: number
  }

  /**
   * RecommendedArticle updateManyAndReturn
   */
  export type RecommendedArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedArticle
     */
    select?: RecommendedArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedArticle
     */
    omit?: RecommendedArticleOmit<ExtArgs> | null
    /**
     * The data used to update RecommendedArticles.
     */
    data: XOR<RecommendedArticleUpdateManyMutationInput, RecommendedArticleUncheckedUpdateManyInput>
    /**
     * Filter which RecommendedArticles to update
     */
    where?: RecommendedArticleWhereInput
    /**
     * Limit how many RecommendedArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecommendedArticle upsert
   */
  export type RecommendedArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedArticle
     */
    select?: RecommendedArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedArticle
     */
    omit?: RecommendedArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the RecommendedArticle to update in case it exists.
     */
    where: RecommendedArticleWhereUniqueInput
    /**
     * In case the RecommendedArticle found by the `where` argument doesn't exist, create a new RecommendedArticle with this data.
     */
    create: XOR<RecommendedArticleCreateInput, RecommendedArticleUncheckedCreateInput>
    /**
     * In case the RecommendedArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendedArticleUpdateInput, RecommendedArticleUncheckedUpdateInput>
  }

  /**
   * RecommendedArticle delete
   */
  export type RecommendedArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedArticle
     */
    select?: RecommendedArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedArticle
     */
    omit?: RecommendedArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedArticleInclude<ExtArgs> | null
    /**
     * Filter which RecommendedArticle to delete.
     */
    where: RecommendedArticleWhereUniqueInput
  }

  /**
   * RecommendedArticle deleteMany
   */
  export type RecommendedArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecommendedArticles to delete
     */
    where?: RecommendedArticleWhereInput
    /**
     * Limit how many RecommendedArticles to delete.
     */
    limit?: number
  }

  /**
   * RecommendedArticle without action
   */
  export type RecommendedArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendedArticle
     */
    select?: RecommendedArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendedArticle
     */
    omit?: RecommendedArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendedArticleInclude<ExtArgs> | null
  }


  /**
   * Model StressRating
   */

  export type AggregateStressRating = {
    _count: StressRatingCountAggregateOutputType | null
    _avg: StressRatingAvgAggregateOutputType | null
    _sum: StressRatingSumAggregateOutputType | null
    _min: StressRatingMinAggregateOutputType | null
    _max: StressRatingMaxAggregateOutputType | null
  }

  export type StressRatingAvgAggregateOutputType = {
    rating: number | null
  }

  export type StressRatingSumAggregateOutputType = {
    rating: number | null
  }

  export type StressRatingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type StressRatingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type StressRatingCountAggregateOutputType = {
    id: number
    userId: number
    rating: number
    createdAt: number
    _all: number
  }


  export type StressRatingAvgAggregateInputType = {
    rating?: true
  }

  export type StressRatingSumAggregateInputType = {
    rating?: true
  }

  export type StressRatingMinAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    createdAt?: true
  }

  export type StressRatingMaxAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    createdAt?: true
  }

  export type StressRatingCountAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    createdAt?: true
    _all?: true
  }

  export type StressRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StressRating to aggregate.
     */
    where?: StressRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StressRatings to fetch.
     */
    orderBy?: StressRatingOrderByWithRelationInput | StressRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StressRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StressRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StressRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StressRatings
    **/
    _count?: true | StressRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StressRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StressRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StressRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StressRatingMaxAggregateInputType
  }

  export type GetStressRatingAggregateType<T extends StressRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateStressRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStressRating[P]>
      : GetScalarType<T[P], AggregateStressRating[P]>
  }




  export type StressRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StressRatingWhereInput
    orderBy?: StressRatingOrderByWithAggregationInput | StressRatingOrderByWithAggregationInput[]
    by: StressRatingScalarFieldEnum[] | StressRatingScalarFieldEnum
    having?: StressRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StressRatingCountAggregateInputType | true
    _avg?: StressRatingAvgAggregateInputType
    _sum?: StressRatingSumAggregateInputType
    _min?: StressRatingMinAggregateInputType
    _max?: StressRatingMaxAggregateInputType
  }

  export type StressRatingGroupByOutputType = {
    id: string
    userId: string
    rating: number
    createdAt: Date
    _count: StressRatingCountAggregateOutputType | null
    _avg: StressRatingAvgAggregateOutputType | null
    _sum: StressRatingSumAggregateOutputType | null
    _min: StressRatingMinAggregateOutputType | null
    _max: StressRatingMaxAggregateOutputType | null
  }

  type GetStressRatingGroupByPayload<T extends StressRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StressRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StressRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StressRatingGroupByOutputType[P]>
            : GetScalarType<T[P], StressRatingGroupByOutputType[P]>
        }
      >
    >


  export type StressRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rating?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stressRating"]>

  export type StressRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rating?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stressRating"]>

  export type StressRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rating?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stressRating"]>

  export type StressRatingSelectScalar = {
    id?: boolean
    userId?: boolean
    rating?: boolean
    createdAt?: boolean
  }

  export type StressRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "rating" | "createdAt", ExtArgs["result"]["stressRating"]>
  export type StressRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StressRatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StressRatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StressRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StressRating"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      rating: number
      createdAt: Date
    }, ExtArgs["result"]["stressRating"]>
    composites: {}
  }

  type StressRatingGetPayload<S extends boolean | null | undefined | StressRatingDefaultArgs> = $Result.GetResult<Prisma.$StressRatingPayload, S>

  type StressRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StressRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StressRatingCountAggregateInputType | true
    }

  export interface StressRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StressRating'], meta: { name: 'StressRating' } }
    /**
     * Find zero or one StressRating that matches the filter.
     * @param {StressRatingFindUniqueArgs} args - Arguments to find a StressRating
     * @example
     * // Get one StressRating
     * const stressRating = await prisma.stressRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StressRatingFindUniqueArgs>(args: SelectSubset<T, StressRatingFindUniqueArgs<ExtArgs>>): Prisma__StressRatingClient<$Result.GetResult<Prisma.$StressRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StressRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StressRatingFindUniqueOrThrowArgs} args - Arguments to find a StressRating
     * @example
     * // Get one StressRating
     * const stressRating = await prisma.stressRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StressRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, StressRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StressRatingClient<$Result.GetResult<Prisma.$StressRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StressRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StressRatingFindFirstArgs} args - Arguments to find a StressRating
     * @example
     * // Get one StressRating
     * const stressRating = await prisma.stressRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StressRatingFindFirstArgs>(args?: SelectSubset<T, StressRatingFindFirstArgs<ExtArgs>>): Prisma__StressRatingClient<$Result.GetResult<Prisma.$StressRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StressRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StressRatingFindFirstOrThrowArgs} args - Arguments to find a StressRating
     * @example
     * // Get one StressRating
     * const stressRating = await prisma.stressRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StressRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, StressRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__StressRatingClient<$Result.GetResult<Prisma.$StressRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StressRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StressRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StressRatings
     * const stressRatings = await prisma.stressRating.findMany()
     * 
     * // Get first 10 StressRatings
     * const stressRatings = await prisma.stressRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stressRatingWithIdOnly = await prisma.stressRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StressRatingFindManyArgs>(args?: SelectSubset<T, StressRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StressRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StressRating.
     * @param {StressRatingCreateArgs} args - Arguments to create a StressRating.
     * @example
     * // Create one StressRating
     * const StressRating = await prisma.stressRating.create({
     *   data: {
     *     // ... data to create a StressRating
     *   }
     * })
     * 
     */
    create<T extends StressRatingCreateArgs>(args: SelectSubset<T, StressRatingCreateArgs<ExtArgs>>): Prisma__StressRatingClient<$Result.GetResult<Prisma.$StressRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StressRatings.
     * @param {StressRatingCreateManyArgs} args - Arguments to create many StressRatings.
     * @example
     * // Create many StressRatings
     * const stressRating = await prisma.stressRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StressRatingCreateManyArgs>(args?: SelectSubset<T, StressRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StressRatings and returns the data saved in the database.
     * @param {StressRatingCreateManyAndReturnArgs} args - Arguments to create many StressRatings.
     * @example
     * // Create many StressRatings
     * const stressRating = await prisma.stressRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StressRatings and only return the `id`
     * const stressRatingWithIdOnly = await prisma.stressRating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StressRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, StressRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StressRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StressRating.
     * @param {StressRatingDeleteArgs} args - Arguments to delete one StressRating.
     * @example
     * // Delete one StressRating
     * const StressRating = await prisma.stressRating.delete({
     *   where: {
     *     // ... filter to delete one StressRating
     *   }
     * })
     * 
     */
    delete<T extends StressRatingDeleteArgs>(args: SelectSubset<T, StressRatingDeleteArgs<ExtArgs>>): Prisma__StressRatingClient<$Result.GetResult<Prisma.$StressRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StressRating.
     * @param {StressRatingUpdateArgs} args - Arguments to update one StressRating.
     * @example
     * // Update one StressRating
     * const stressRating = await prisma.stressRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StressRatingUpdateArgs>(args: SelectSubset<T, StressRatingUpdateArgs<ExtArgs>>): Prisma__StressRatingClient<$Result.GetResult<Prisma.$StressRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StressRatings.
     * @param {StressRatingDeleteManyArgs} args - Arguments to filter StressRatings to delete.
     * @example
     * // Delete a few StressRatings
     * const { count } = await prisma.stressRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StressRatingDeleteManyArgs>(args?: SelectSubset<T, StressRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StressRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StressRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StressRatings
     * const stressRating = await prisma.stressRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StressRatingUpdateManyArgs>(args: SelectSubset<T, StressRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StressRatings and returns the data updated in the database.
     * @param {StressRatingUpdateManyAndReturnArgs} args - Arguments to update many StressRatings.
     * @example
     * // Update many StressRatings
     * const stressRating = await prisma.stressRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StressRatings and only return the `id`
     * const stressRatingWithIdOnly = await prisma.stressRating.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StressRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, StressRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StressRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StressRating.
     * @param {StressRatingUpsertArgs} args - Arguments to update or create a StressRating.
     * @example
     * // Update or create a StressRating
     * const stressRating = await prisma.stressRating.upsert({
     *   create: {
     *     // ... data to create a StressRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StressRating we want to update
     *   }
     * })
     */
    upsert<T extends StressRatingUpsertArgs>(args: SelectSubset<T, StressRatingUpsertArgs<ExtArgs>>): Prisma__StressRatingClient<$Result.GetResult<Prisma.$StressRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StressRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StressRatingCountArgs} args - Arguments to filter StressRatings to count.
     * @example
     * // Count the number of StressRatings
     * const count = await prisma.stressRating.count({
     *   where: {
     *     // ... the filter for the StressRatings we want to count
     *   }
     * })
    **/
    count<T extends StressRatingCountArgs>(
      args?: Subset<T, StressRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StressRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StressRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StressRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StressRatingAggregateArgs>(args: Subset<T, StressRatingAggregateArgs>): Prisma.PrismaPromise<GetStressRatingAggregateType<T>>

    /**
     * Group by StressRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StressRatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StressRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StressRatingGroupByArgs['orderBy'] }
        : { orderBy?: StressRatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StressRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStressRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StressRating model
   */
  readonly fields: StressRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StressRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StressRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StressRating model
   */
  interface StressRatingFieldRefs {
    readonly id: FieldRef<"StressRating", 'String'>
    readonly userId: FieldRef<"StressRating", 'String'>
    readonly rating: FieldRef<"StressRating", 'Int'>
    readonly createdAt: FieldRef<"StressRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StressRating findUnique
   */
  export type StressRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StressRating
     */
    select?: StressRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StressRating
     */
    omit?: StressRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StressRatingInclude<ExtArgs> | null
    /**
     * Filter, which StressRating to fetch.
     */
    where: StressRatingWhereUniqueInput
  }

  /**
   * StressRating findUniqueOrThrow
   */
  export type StressRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StressRating
     */
    select?: StressRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StressRating
     */
    omit?: StressRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StressRatingInclude<ExtArgs> | null
    /**
     * Filter, which StressRating to fetch.
     */
    where: StressRatingWhereUniqueInput
  }

  /**
   * StressRating findFirst
   */
  export type StressRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StressRating
     */
    select?: StressRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StressRating
     */
    omit?: StressRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StressRatingInclude<ExtArgs> | null
    /**
     * Filter, which StressRating to fetch.
     */
    where?: StressRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StressRatings to fetch.
     */
    orderBy?: StressRatingOrderByWithRelationInput | StressRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StressRatings.
     */
    cursor?: StressRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StressRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StressRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StressRatings.
     */
    distinct?: StressRatingScalarFieldEnum | StressRatingScalarFieldEnum[]
  }

  /**
   * StressRating findFirstOrThrow
   */
  export type StressRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StressRating
     */
    select?: StressRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StressRating
     */
    omit?: StressRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StressRatingInclude<ExtArgs> | null
    /**
     * Filter, which StressRating to fetch.
     */
    where?: StressRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StressRatings to fetch.
     */
    orderBy?: StressRatingOrderByWithRelationInput | StressRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StressRatings.
     */
    cursor?: StressRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StressRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StressRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StressRatings.
     */
    distinct?: StressRatingScalarFieldEnum | StressRatingScalarFieldEnum[]
  }

  /**
   * StressRating findMany
   */
  export type StressRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StressRating
     */
    select?: StressRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StressRating
     */
    omit?: StressRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StressRatingInclude<ExtArgs> | null
    /**
     * Filter, which StressRatings to fetch.
     */
    where?: StressRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StressRatings to fetch.
     */
    orderBy?: StressRatingOrderByWithRelationInput | StressRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StressRatings.
     */
    cursor?: StressRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StressRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StressRatings.
     */
    skip?: number
    distinct?: StressRatingScalarFieldEnum | StressRatingScalarFieldEnum[]
  }

  /**
   * StressRating create
   */
  export type StressRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StressRating
     */
    select?: StressRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StressRating
     */
    omit?: StressRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StressRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a StressRating.
     */
    data: XOR<StressRatingCreateInput, StressRatingUncheckedCreateInput>
  }

  /**
   * StressRating createMany
   */
  export type StressRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StressRatings.
     */
    data: StressRatingCreateManyInput | StressRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StressRating createManyAndReturn
   */
  export type StressRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StressRating
     */
    select?: StressRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StressRating
     */
    omit?: StressRatingOmit<ExtArgs> | null
    /**
     * The data used to create many StressRatings.
     */
    data: StressRatingCreateManyInput | StressRatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StressRatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StressRating update
   */
  export type StressRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StressRating
     */
    select?: StressRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StressRating
     */
    omit?: StressRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StressRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a StressRating.
     */
    data: XOR<StressRatingUpdateInput, StressRatingUncheckedUpdateInput>
    /**
     * Choose, which StressRating to update.
     */
    where: StressRatingWhereUniqueInput
  }

  /**
   * StressRating updateMany
   */
  export type StressRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StressRatings.
     */
    data: XOR<StressRatingUpdateManyMutationInput, StressRatingUncheckedUpdateManyInput>
    /**
     * Filter which StressRatings to update
     */
    where?: StressRatingWhereInput
    /**
     * Limit how many StressRatings to update.
     */
    limit?: number
  }

  /**
   * StressRating updateManyAndReturn
   */
  export type StressRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StressRating
     */
    select?: StressRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StressRating
     */
    omit?: StressRatingOmit<ExtArgs> | null
    /**
     * The data used to update StressRatings.
     */
    data: XOR<StressRatingUpdateManyMutationInput, StressRatingUncheckedUpdateManyInput>
    /**
     * Filter which StressRatings to update
     */
    where?: StressRatingWhereInput
    /**
     * Limit how many StressRatings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StressRatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StressRating upsert
   */
  export type StressRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StressRating
     */
    select?: StressRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StressRating
     */
    omit?: StressRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StressRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the StressRating to update in case it exists.
     */
    where: StressRatingWhereUniqueInput
    /**
     * In case the StressRating found by the `where` argument doesn't exist, create a new StressRating with this data.
     */
    create: XOR<StressRatingCreateInput, StressRatingUncheckedCreateInput>
    /**
     * In case the StressRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StressRatingUpdateInput, StressRatingUncheckedUpdateInput>
  }

  /**
   * StressRating delete
   */
  export type StressRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StressRating
     */
    select?: StressRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StressRating
     */
    omit?: StressRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StressRatingInclude<ExtArgs> | null
    /**
     * Filter which StressRating to delete.
     */
    where: StressRatingWhereUniqueInput
  }

  /**
   * StressRating deleteMany
   */
  export type StressRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StressRatings to delete
     */
    where?: StressRatingWhereInput
    /**
     * Limit how many StressRatings to delete.
     */
    limit?: number
  }

  /**
   * StressRating without action
   */
  export type StressRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StressRating
     */
    select?: StressRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StressRating
     */
    omit?: StressRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StressRatingInclude<ExtArgs> | null
  }


  /**
   * Model JournalEntry
   */

  export type AggregateJournalEntry = {
    _count: JournalEntryCountAggregateOutputType | null
    _min: JournalEntryMinAggregateOutputType | null
    _max: JournalEntryMaxAggregateOutputType | null
  }

  export type JournalEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    journalName: string | null
    dateKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    journalName: string | null
    dateKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalEntryCountAggregateOutputType = {
    id: number
    userId: number
    journalName: number
    dateKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JournalEntryMinAggregateInputType = {
    id?: true
    userId?: true
    journalName?: true
    dateKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    journalName?: true
    dateKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalEntryCountAggregateInputType = {
    id?: true
    userId?: true
    journalName?: true
    dateKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JournalEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntry to aggregate.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JournalEntries
    **/
    _count?: true | JournalEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JournalEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JournalEntryMaxAggregateInputType
  }

  export type GetJournalEntryAggregateType<T extends JournalEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateJournalEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJournalEntry[P]>
      : GetScalarType<T[P], AggregateJournalEntry[P]>
  }




  export type JournalEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryWhereInput
    orderBy?: JournalEntryOrderByWithAggregationInput | JournalEntryOrderByWithAggregationInput[]
    by: JournalEntryScalarFieldEnum[] | JournalEntryScalarFieldEnum
    having?: JournalEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JournalEntryCountAggregateInputType | true
    _min?: JournalEntryMinAggregateInputType
    _max?: JournalEntryMaxAggregateInputType
  }

  export type JournalEntryGroupByOutputType = {
    id: string
    userId: string
    journalName: string
    dateKey: string
    createdAt: Date
    updatedAt: Date
    _count: JournalEntryCountAggregateOutputType | null
    _min: JournalEntryMinAggregateOutputType | null
    _max: JournalEntryMaxAggregateOutputType | null
  }

  type GetJournalEntryGroupByPayload<T extends JournalEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JournalEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JournalEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JournalEntryGroupByOutputType[P]>
            : GetScalarType<T[P], JournalEntryGroupByOutputType[P]>
        }
      >
    >


  export type JournalEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    journalName?: boolean
    dateKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    inputs?: boolean | JournalEntry$inputsArgs<ExtArgs>
    _count?: boolean | JournalEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    journalName?: boolean
    dateKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    journalName?: boolean
    dateKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    journalName?: boolean
    dateKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JournalEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "journalName" | "dateKey" | "createdAt" | "updatedAt", ExtArgs["result"]["journalEntry"]>
  export type JournalEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    inputs?: boolean | JournalEntry$inputsArgs<ExtArgs>
    _count?: boolean | JournalEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JournalEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JournalEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JournalEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JournalEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      inputs: Prisma.$JournalEntryInputPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      journalName: string
      dateKey: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["journalEntry"]>
    composites: {}
  }

  type JournalEntryGetPayload<S extends boolean | null | undefined | JournalEntryDefaultArgs> = $Result.GetResult<Prisma.$JournalEntryPayload, S>

  type JournalEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JournalEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JournalEntryCountAggregateInputType | true
    }

  export interface JournalEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JournalEntry'], meta: { name: 'JournalEntry' } }
    /**
     * Find zero or one JournalEntry that matches the filter.
     * @param {JournalEntryFindUniqueArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JournalEntryFindUniqueArgs>(args: SelectSubset<T, JournalEntryFindUniqueArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JournalEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JournalEntryFindUniqueOrThrowArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JournalEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, JournalEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JournalEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindFirstArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JournalEntryFindFirstArgs>(args?: SelectSubset<T, JournalEntryFindFirstArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JournalEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindFirstOrThrowArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JournalEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, JournalEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JournalEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JournalEntries
     * const journalEntries = await prisma.journalEntry.findMany()
     * 
     * // Get first 10 JournalEntries
     * const journalEntries = await prisma.journalEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JournalEntryFindManyArgs>(args?: SelectSubset<T, JournalEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JournalEntry.
     * @param {JournalEntryCreateArgs} args - Arguments to create a JournalEntry.
     * @example
     * // Create one JournalEntry
     * const JournalEntry = await prisma.journalEntry.create({
     *   data: {
     *     // ... data to create a JournalEntry
     *   }
     * })
     * 
     */
    create<T extends JournalEntryCreateArgs>(args: SelectSubset<T, JournalEntryCreateArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JournalEntries.
     * @param {JournalEntryCreateManyArgs} args - Arguments to create many JournalEntries.
     * @example
     * // Create many JournalEntries
     * const journalEntry = await prisma.journalEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JournalEntryCreateManyArgs>(args?: SelectSubset<T, JournalEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JournalEntries and returns the data saved in the database.
     * @param {JournalEntryCreateManyAndReturnArgs} args - Arguments to create many JournalEntries.
     * @example
     * // Create many JournalEntries
     * const journalEntry = await prisma.journalEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JournalEntries and only return the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JournalEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, JournalEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JournalEntry.
     * @param {JournalEntryDeleteArgs} args - Arguments to delete one JournalEntry.
     * @example
     * // Delete one JournalEntry
     * const JournalEntry = await prisma.journalEntry.delete({
     *   where: {
     *     // ... filter to delete one JournalEntry
     *   }
     * })
     * 
     */
    delete<T extends JournalEntryDeleteArgs>(args: SelectSubset<T, JournalEntryDeleteArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JournalEntry.
     * @param {JournalEntryUpdateArgs} args - Arguments to update one JournalEntry.
     * @example
     * // Update one JournalEntry
     * const journalEntry = await prisma.journalEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JournalEntryUpdateArgs>(args: SelectSubset<T, JournalEntryUpdateArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JournalEntries.
     * @param {JournalEntryDeleteManyArgs} args - Arguments to filter JournalEntries to delete.
     * @example
     * // Delete a few JournalEntries
     * const { count } = await prisma.journalEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JournalEntryDeleteManyArgs>(args?: SelectSubset<T, JournalEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JournalEntries
     * const journalEntry = await prisma.journalEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JournalEntryUpdateManyArgs>(args: SelectSubset<T, JournalEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalEntries and returns the data updated in the database.
     * @param {JournalEntryUpdateManyAndReturnArgs} args - Arguments to update many JournalEntries.
     * @example
     * // Update many JournalEntries
     * const journalEntry = await prisma.journalEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JournalEntries and only return the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JournalEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, JournalEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JournalEntry.
     * @param {JournalEntryUpsertArgs} args - Arguments to update or create a JournalEntry.
     * @example
     * // Update or create a JournalEntry
     * const journalEntry = await prisma.journalEntry.upsert({
     *   create: {
     *     // ... data to create a JournalEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JournalEntry we want to update
     *   }
     * })
     */
    upsert<T extends JournalEntryUpsertArgs>(args: SelectSubset<T, JournalEntryUpsertArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JournalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryCountArgs} args - Arguments to filter JournalEntries to count.
     * @example
     * // Count the number of JournalEntries
     * const count = await prisma.journalEntry.count({
     *   where: {
     *     // ... the filter for the JournalEntries we want to count
     *   }
     * })
    **/
    count<T extends JournalEntryCountArgs>(
      args?: Subset<T, JournalEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JournalEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JournalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JournalEntryAggregateArgs>(args: Subset<T, JournalEntryAggregateArgs>): Prisma.PrismaPromise<GetJournalEntryAggregateType<T>>

    /**
     * Group by JournalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JournalEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JournalEntryGroupByArgs['orderBy'] }
        : { orderBy?: JournalEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JournalEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JournalEntry model
   */
  readonly fields: JournalEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JournalEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JournalEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inputs<T extends JournalEntry$inputsArgs<ExtArgs> = {}>(args?: Subset<T, JournalEntry$inputsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JournalEntry model
   */
  interface JournalEntryFieldRefs {
    readonly id: FieldRef<"JournalEntry", 'String'>
    readonly userId: FieldRef<"JournalEntry", 'String'>
    readonly journalName: FieldRef<"JournalEntry", 'String'>
    readonly dateKey: FieldRef<"JournalEntry", 'String'>
    readonly createdAt: FieldRef<"JournalEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"JournalEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JournalEntry findUnique
   */
  export type JournalEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry findUniqueOrThrow
   */
  export type JournalEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry findFirst
   */
  export type JournalEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalEntries.
     */
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry findFirstOrThrow
   */
  export type JournalEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalEntries.
     */
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry findMany
   */
  export type JournalEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntries to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry create
   */
  export type JournalEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a JournalEntry.
     */
    data: XOR<JournalEntryCreateInput, JournalEntryUncheckedCreateInput>
  }

  /**
   * JournalEntry createMany
   */
  export type JournalEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JournalEntries.
     */
    data: JournalEntryCreateManyInput | JournalEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JournalEntry createManyAndReturn
   */
  export type JournalEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * The data used to create many JournalEntries.
     */
    data: JournalEntryCreateManyInput | JournalEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JournalEntry update
   */
  export type JournalEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a JournalEntry.
     */
    data: XOR<JournalEntryUpdateInput, JournalEntryUncheckedUpdateInput>
    /**
     * Choose, which JournalEntry to update.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry updateMany
   */
  export type JournalEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JournalEntries.
     */
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyInput>
    /**
     * Filter which JournalEntries to update
     */
    where?: JournalEntryWhereInput
    /**
     * Limit how many JournalEntries to update.
     */
    limit?: number
  }

  /**
   * JournalEntry updateManyAndReturn
   */
  export type JournalEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * The data used to update JournalEntries.
     */
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyInput>
    /**
     * Filter which JournalEntries to update
     */
    where?: JournalEntryWhereInput
    /**
     * Limit how many JournalEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JournalEntry upsert
   */
  export type JournalEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the JournalEntry to update in case it exists.
     */
    where: JournalEntryWhereUniqueInput
    /**
     * In case the JournalEntry found by the `where` argument doesn't exist, create a new JournalEntry with this data.
     */
    create: XOR<JournalEntryCreateInput, JournalEntryUncheckedCreateInput>
    /**
     * In case the JournalEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JournalEntryUpdateInput, JournalEntryUncheckedUpdateInput>
  }

  /**
   * JournalEntry delete
   */
  export type JournalEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter which JournalEntry to delete.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry deleteMany
   */
  export type JournalEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntries to delete
     */
    where?: JournalEntryWhereInput
    /**
     * Limit how many JournalEntries to delete.
     */
    limit?: number
  }

  /**
   * JournalEntry.inputs
   */
  export type JournalEntry$inputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryInput
     */
    select?: JournalEntryInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryInput
     */
    omit?: JournalEntryInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInputInclude<ExtArgs> | null
    where?: JournalEntryInputWhereInput
    orderBy?: JournalEntryInputOrderByWithRelationInput | JournalEntryInputOrderByWithRelationInput[]
    cursor?: JournalEntryInputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JournalEntryInputScalarFieldEnum | JournalEntryInputScalarFieldEnum[]
  }

  /**
   * JournalEntry without action
   */
  export type JournalEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
  }


  /**
   * Model JournalEntryInput
   */

  export type AggregateJournalEntryInput = {
    _count: JournalEntryInputCountAggregateOutputType | null
    _min: JournalEntryInputMinAggregateOutputType | null
    _max: JournalEntryInputMaxAggregateOutputType | null
  }

  export type JournalEntryInputMinAggregateOutputType = {
    id: string | null
    journalEntryId: string | null
    inputKey: string | null
    encryptedData: string | null
    iv: string | null
  }

  export type JournalEntryInputMaxAggregateOutputType = {
    id: string | null
    journalEntryId: string | null
    inputKey: string | null
    encryptedData: string | null
    iv: string | null
  }

  export type JournalEntryInputCountAggregateOutputType = {
    id: number
    journalEntryId: number
    inputKey: number
    encryptedData: number
    iv: number
    _all: number
  }


  export type JournalEntryInputMinAggregateInputType = {
    id?: true
    journalEntryId?: true
    inputKey?: true
    encryptedData?: true
    iv?: true
  }

  export type JournalEntryInputMaxAggregateInputType = {
    id?: true
    journalEntryId?: true
    inputKey?: true
    encryptedData?: true
    iv?: true
  }

  export type JournalEntryInputCountAggregateInputType = {
    id?: true
    journalEntryId?: true
    inputKey?: true
    encryptedData?: true
    iv?: true
    _all?: true
  }

  export type JournalEntryInputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntryInput to aggregate.
     */
    where?: JournalEntryInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntryInputs to fetch.
     */
    orderBy?: JournalEntryInputOrderByWithRelationInput | JournalEntryInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JournalEntryInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntryInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntryInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JournalEntryInputs
    **/
    _count?: true | JournalEntryInputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JournalEntryInputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JournalEntryInputMaxAggregateInputType
  }

  export type GetJournalEntryInputAggregateType<T extends JournalEntryInputAggregateArgs> = {
        [P in keyof T & keyof AggregateJournalEntryInput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJournalEntryInput[P]>
      : GetScalarType<T[P], AggregateJournalEntryInput[P]>
  }




  export type JournalEntryInputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryInputWhereInput
    orderBy?: JournalEntryInputOrderByWithAggregationInput | JournalEntryInputOrderByWithAggregationInput[]
    by: JournalEntryInputScalarFieldEnum[] | JournalEntryInputScalarFieldEnum
    having?: JournalEntryInputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JournalEntryInputCountAggregateInputType | true
    _min?: JournalEntryInputMinAggregateInputType
    _max?: JournalEntryInputMaxAggregateInputType
  }

  export type JournalEntryInputGroupByOutputType = {
    id: string
    journalEntryId: string
    inputKey: string
    encryptedData: string
    iv: string
    _count: JournalEntryInputCountAggregateOutputType | null
    _min: JournalEntryInputMinAggregateOutputType | null
    _max: JournalEntryInputMaxAggregateOutputType | null
  }

  type GetJournalEntryInputGroupByPayload<T extends JournalEntryInputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JournalEntryInputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JournalEntryInputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JournalEntryInputGroupByOutputType[P]>
            : GetScalarType<T[P], JournalEntryInputGroupByOutputType[P]>
        }
      >
    >


  export type JournalEntryInputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journalEntryId?: boolean
    inputKey?: boolean
    encryptedData?: boolean
    iv?: boolean
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntryInput"]>

  export type JournalEntryInputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journalEntryId?: boolean
    inputKey?: boolean
    encryptedData?: boolean
    iv?: boolean
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntryInput"]>

  export type JournalEntryInputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journalEntryId?: boolean
    inputKey?: boolean
    encryptedData?: boolean
    iv?: boolean
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntryInput"]>

  export type JournalEntryInputSelectScalar = {
    id?: boolean
    journalEntryId?: boolean
    inputKey?: boolean
    encryptedData?: boolean
    iv?: boolean
  }

  export type JournalEntryInputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "journalEntryId" | "inputKey" | "encryptedData" | "iv", ExtArgs["result"]["journalEntryInput"]>
  export type JournalEntryInputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
  }
  export type JournalEntryInputIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
  }
  export type JournalEntryInputIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
  }

  export type $JournalEntryInputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JournalEntryInput"
    objects: {
      journalEntry: Prisma.$JournalEntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      journalEntryId: string
      inputKey: string
      encryptedData: string
      iv: string
    }, ExtArgs["result"]["journalEntryInput"]>
    composites: {}
  }

  type JournalEntryInputGetPayload<S extends boolean | null | undefined | JournalEntryInputDefaultArgs> = $Result.GetResult<Prisma.$JournalEntryInputPayload, S>

  type JournalEntryInputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JournalEntryInputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JournalEntryInputCountAggregateInputType | true
    }

  export interface JournalEntryInputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JournalEntryInput'], meta: { name: 'JournalEntryInput' } }
    /**
     * Find zero or one JournalEntryInput that matches the filter.
     * @param {JournalEntryInputFindUniqueArgs} args - Arguments to find a JournalEntryInput
     * @example
     * // Get one JournalEntryInput
     * const journalEntryInput = await prisma.journalEntryInput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JournalEntryInputFindUniqueArgs>(args: SelectSubset<T, JournalEntryInputFindUniqueArgs<ExtArgs>>): Prisma__JournalEntryInputClient<$Result.GetResult<Prisma.$JournalEntryInputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JournalEntryInput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JournalEntryInputFindUniqueOrThrowArgs} args - Arguments to find a JournalEntryInput
     * @example
     * // Get one JournalEntryInput
     * const journalEntryInput = await prisma.journalEntryInput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JournalEntryInputFindUniqueOrThrowArgs>(args: SelectSubset<T, JournalEntryInputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JournalEntryInputClient<$Result.GetResult<Prisma.$JournalEntryInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JournalEntryInput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryInputFindFirstArgs} args - Arguments to find a JournalEntryInput
     * @example
     * // Get one JournalEntryInput
     * const journalEntryInput = await prisma.journalEntryInput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JournalEntryInputFindFirstArgs>(args?: SelectSubset<T, JournalEntryInputFindFirstArgs<ExtArgs>>): Prisma__JournalEntryInputClient<$Result.GetResult<Prisma.$JournalEntryInputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JournalEntryInput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryInputFindFirstOrThrowArgs} args - Arguments to find a JournalEntryInput
     * @example
     * // Get one JournalEntryInput
     * const journalEntryInput = await prisma.journalEntryInput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JournalEntryInputFindFirstOrThrowArgs>(args?: SelectSubset<T, JournalEntryInputFindFirstOrThrowArgs<ExtArgs>>): Prisma__JournalEntryInputClient<$Result.GetResult<Prisma.$JournalEntryInputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JournalEntryInputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryInputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JournalEntryInputs
     * const journalEntryInputs = await prisma.journalEntryInput.findMany()
     * 
     * // Get first 10 JournalEntryInputs
     * const journalEntryInputs = await prisma.journalEntryInput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journalEntryInputWithIdOnly = await prisma.journalEntryInput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JournalEntryInputFindManyArgs>(args?: SelectSubset<T, JournalEntryInputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JournalEntryInput.
     * @param {JournalEntryInputCreateArgs} args - Arguments to create a JournalEntryInput.
     * @example
     * // Create one JournalEntryInput
     * const JournalEntryInput = await prisma.journalEntryInput.create({
     *   data: {
     *     // ... data to create a JournalEntryInput
     *   }
     * })
     * 
     */
    create<T extends JournalEntryInputCreateArgs>(args: SelectSubset<T, JournalEntryInputCreateArgs<ExtArgs>>): Prisma__JournalEntryInputClient<$Result.GetResult<Prisma.$JournalEntryInputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JournalEntryInputs.
     * @param {JournalEntryInputCreateManyArgs} args - Arguments to create many JournalEntryInputs.
     * @example
     * // Create many JournalEntryInputs
     * const journalEntryInput = await prisma.journalEntryInput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JournalEntryInputCreateManyArgs>(args?: SelectSubset<T, JournalEntryInputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JournalEntryInputs and returns the data saved in the database.
     * @param {JournalEntryInputCreateManyAndReturnArgs} args - Arguments to create many JournalEntryInputs.
     * @example
     * // Create many JournalEntryInputs
     * const journalEntryInput = await prisma.journalEntryInput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JournalEntryInputs and only return the `id`
     * const journalEntryInputWithIdOnly = await prisma.journalEntryInput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JournalEntryInputCreateManyAndReturnArgs>(args?: SelectSubset<T, JournalEntryInputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryInputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JournalEntryInput.
     * @param {JournalEntryInputDeleteArgs} args - Arguments to delete one JournalEntryInput.
     * @example
     * // Delete one JournalEntryInput
     * const JournalEntryInput = await prisma.journalEntryInput.delete({
     *   where: {
     *     // ... filter to delete one JournalEntryInput
     *   }
     * })
     * 
     */
    delete<T extends JournalEntryInputDeleteArgs>(args: SelectSubset<T, JournalEntryInputDeleteArgs<ExtArgs>>): Prisma__JournalEntryInputClient<$Result.GetResult<Prisma.$JournalEntryInputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JournalEntryInput.
     * @param {JournalEntryInputUpdateArgs} args - Arguments to update one JournalEntryInput.
     * @example
     * // Update one JournalEntryInput
     * const journalEntryInput = await prisma.journalEntryInput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JournalEntryInputUpdateArgs>(args: SelectSubset<T, JournalEntryInputUpdateArgs<ExtArgs>>): Prisma__JournalEntryInputClient<$Result.GetResult<Prisma.$JournalEntryInputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JournalEntryInputs.
     * @param {JournalEntryInputDeleteManyArgs} args - Arguments to filter JournalEntryInputs to delete.
     * @example
     * // Delete a few JournalEntryInputs
     * const { count } = await prisma.journalEntryInput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JournalEntryInputDeleteManyArgs>(args?: SelectSubset<T, JournalEntryInputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalEntryInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryInputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JournalEntryInputs
     * const journalEntryInput = await prisma.journalEntryInput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JournalEntryInputUpdateManyArgs>(args: SelectSubset<T, JournalEntryInputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalEntryInputs and returns the data updated in the database.
     * @param {JournalEntryInputUpdateManyAndReturnArgs} args - Arguments to update many JournalEntryInputs.
     * @example
     * // Update many JournalEntryInputs
     * const journalEntryInput = await prisma.journalEntryInput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JournalEntryInputs and only return the `id`
     * const journalEntryInputWithIdOnly = await prisma.journalEntryInput.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JournalEntryInputUpdateManyAndReturnArgs>(args: SelectSubset<T, JournalEntryInputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryInputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JournalEntryInput.
     * @param {JournalEntryInputUpsertArgs} args - Arguments to update or create a JournalEntryInput.
     * @example
     * // Update or create a JournalEntryInput
     * const journalEntryInput = await prisma.journalEntryInput.upsert({
     *   create: {
     *     // ... data to create a JournalEntryInput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JournalEntryInput we want to update
     *   }
     * })
     */
    upsert<T extends JournalEntryInputUpsertArgs>(args: SelectSubset<T, JournalEntryInputUpsertArgs<ExtArgs>>): Prisma__JournalEntryInputClient<$Result.GetResult<Prisma.$JournalEntryInputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JournalEntryInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryInputCountArgs} args - Arguments to filter JournalEntryInputs to count.
     * @example
     * // Count the number of JournalEntryInputs
     * const count = await prisma.journalEntryInput.count({
     *   where: {
     *     // ... the filter for the JournalEntryInputs we want to count
     *   }
     * })
    **/
    count<T extends JournalEntryInputCountArgs>(
      args?: Subset<T, JournalEntryInputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JournalEntryInputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JournalEntryInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryInputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JournalEntryInputAggregateArgs>(args: Subset<T, JournalEntryInputAggregateArgs>): Prisma.PrismaPromise<GetJournalEntryInputAggregateType<T>>

    /**
     * Group by JournalEntryInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryInputGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JournalEntryInputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JournalEntryInputGroupByArgs['orderBy'] }
        : { orderBy?: JournalEntryInputGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JournalEntryInputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalEntryInputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JournalEntryInput model
   */
  readonly fields: JournalEntryInputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JournalEntryInput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JournalEntryInputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    journalEntry<T extends JournalEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JournalEntryDefaultArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JournalEntryInput model
   */
  interface JournalEntryInputFieldRefs {
    readonly id: FieldRef<"JournalEntryInput", 'String'>
    readonly journalEntryId: FieldRef<"JournalEntryInput", 'String'>
    readonly inputKey: FieldRef<"JournalEntryInput", 'String'>
    readonly encryptedData: FieldRef<"JournalEntryInput", 'String'>
    readonly iv: FieldRef<"JournalEntryInput", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JournalEntryInput findUnique
   */
  export type JournalEntryInputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryInput
     */
    select?: JournalEntryInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryInput
     */
    omit?: JournalEntryInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInputInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntryInput to fetch.
     */
    where: JournalEntryInputWhereUniqueInput
  }

  /**
   * JournalEntryInput findUniqueOrThrow
   */
  export type JournalEntryInputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryInput
     */
    select?: JournalEntryInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryInput
     */
    omit?: JournalEntryInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInputInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntryInput to fetch.
     */
    where: JournalEntryInputWhereUniqueInput
  }

  /**
   * JournalEntryInput findFirst
   */
  export type JournalEntryInputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryInput
     */
    select?: JournalEntryInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryInput
     */
    omit?: JournalEntryInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInputInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntryInput to fetch.
     */
    where?: JournalEntryInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntryInputs to fetch.
     */
    orderBy?: JournalEntryInputOrderByWithRelationInput | JournalEntryInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalEntryInputs.
     */
    cursor?: JournalEntryInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntryInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntryInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalEntryInputs.
     */
    distinct?: JournalEntryInputScalarFieldEnum | JournalEntryInputScalarFieldEnum[]
  }

  /**
   * JournalEntryInput findFirstOrThrow
   */
  export type JournalEntryInputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryInput
     */
    select?: JournalEntryInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryInput
     */
    omit?: JournalEntryInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInputInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntryInput to fetch.
     */
    where?: JournalEntryInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntryInputs to fetch.
     */
    orderBy?: JournalEntryInputOrderByWithRelationInput | JournalEntryInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalEntryInputs.
     */
    cursor?: JournalEntryInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntryInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntryInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalEntryInputs.
     */
    distinct?: JournalEntryInputScalarFieldEnum | JournalEntryInputScalarFieldEnum[]
  }

  /**
   * JournalEntryInput findMany
   */
  export type JournalEntryInputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryInput
     */
    select?: JournalEntryInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryInput
     */
    omit?: JournalEntryInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInputInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntryInputs to fetch.
     */
    where?: JournalEntryInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntryInputs to fetch.
     */
    orderBy?: JournalEntryInputOrderByWithRelationInput | JournalEntryInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JournalEntryInputs.
     */
    cursor?: JournalEntryInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntryInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntryInputs.
     */
    skip?: number
    distinct?: JournalEntryInputScalarFieldEnum | JournalEntryInputScalarFieldEnum[]
  }

  /**
   * JournalEntryInput create
   */
  export type JournalEntryInputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryInput
     */
    select?: JournalEntryInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryInput
     */
    omit?: JournalEntryInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInputInclude<ExtArgs> | null
    /**
     * The data needed to create a JournalEntryInput.
     */
    data: XOR<JournalEntryInputCreateInput, JournalEntryInputUncheckedCreateInput>
  }

  /**
   * JournalEntryInput createMany
   */
  export type JournalEntryInputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JournalEntryInputs.
     */
    data: JournalEntryInputCreateManyInput | JournalEntryInputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JournalEntryInput createManyAndReturn
   */
  export type JournalEntryInputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryInput
     */
    select?: JournalEntryInputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryInput
     */
    omit?: JournalEntryInputOmit<ExtArgs> | null
    /**
     * The data used to create many JournalEntryInputs.
     */
    data: JournalEntryInputCreateManyInput | JournalEntryInputCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInputIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JournalEntryInput update
   */
  export type JournalEntryInputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryInput
     */
    select?: JournalEntryInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryInput
     */
    omit?: JournalEntryInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInputInclude<ExtArgs> | null
    /**
     * The data needed to update a JournalEntryInput.
     */
    data: XOR<JournalEntryInputUpdateInput, JournalEntryInputUncheckedUpdateInput>
    /**
     * Choose, which JournalEntryInput to update.
     */
    where: JournalEntryInputWhereUniqueInput
  }

  /**
   * JournalEntryInput updateMany
   */
  export type JournalEntryInputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JournalEntryInputs.
     */
    data: XOR<JournalEntryInputUpdateManyMutationInput, JournalEntryInputUncheckedUpdateManyInput>
    /**
     * Filter which JournalEntryInputs to update
     */
    where?: JournalEntryInputWhereInput
    /**
     * Limit how many JournalEntryInputs to update.
     */
    limit?: number
  }

  /**
   * JournalEntryInput updateManyAndReturn
   */
  export type JournalEntryInputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryInput
     */
    select?: JournalEntryInputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryInput
     */
    omit?: JournalEntryInputOmit<ExtArgs> | null
    /**
     * The data used to update JournalEntryInputs.
     */
    data: XOR<JournalEntryInputUpdateManyMutationInput, JournalEntryInputUncheckedUpdateManyInput>
    /**
     * Filter which JournalEntryInputs to update
     */
    where?: JournalEntryInputWhereInput
    /**
     * Limit how many JournalEntryInputs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInputIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JournalEntryInput upsert
   */
  export type JournalEntryInputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryInput
     */
    select?: JournalEntryInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryInput
     */
    omit?: JournalEntryInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInputInclude<ExtArgs> | null
    /**
     * The filter to search for the JournalEntryInput to update in case it exists.
     */
    where: JournalEntryInputWhereUniqueInput
    /**
     * In case the JournalEntryInput found by the `where` argument doesn't exist, create a new JournalEntryInput with this data.
     */
    create: XOR<JournalEntryInputCreateInput, JournalEntryInputUncheckedCreateInput>
    /**
     * In case the JournalEntryInput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JournalEntryInputUpdateInput, JournalEntryInputUncheckedUpdateInput>
  }

  /**
   * JournalEntryInput delete
   */
  export type JournalEntryInputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryInput
     */
    select?: JournalEntryInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryInput
     */
    omit?: JournalEntryInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInputInclude<ExtArgs> | null
    /**
     * Filter which JournalEntryInput to delete.
     */
    where: JournalEntryInputWhereUniqueInput
  }

  /**
   * JournalEntryInput deleteMany
   */
  export type JournalEntryInputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntryInputs to delete
     */
    where?: JournalEntryInputWhereInput
    /**
     * Limit how many JournalEntryInputs to delete.
     */
    limit?: number
  }

  /**
   * JournalEntryInput without action
   */
  export type JournalEntryInputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryInput
     */
    select?: JournalEntryInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryInput
     */
    omit?: JournalEntryInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInputInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BurnoutAssessmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    assessmentKey: 'assessmentKey',
    createdAt: 'createdAt',
    categoryScores: 'categoryScores'
  };

  export type BurnoutAssessmentScalarFieldEnum = (typeof BurnoutAssessmentScalarFieldEnum)[keyof typeof BurnoutAssessmentScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    exerciseSlug: 'exerciseSlug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    completedPrompts: 'completedPrompts',
    completionPercentage: 'completionPercentage'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const ExerciseInputScalarFieldEnum: {
    id: 'id',
    exerciseId: 'exerciseId',
    inputKey: 'inputKey',
    encryptedData: 'encryptedData',
    iv: 'iv'
  };

  export type ExerciseInputScalarFieldEnum = (typeof ExerciseInputScalarFieldEnum)[keyof typeof ExerciseInputScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseSlug: 'courseSlug',
    courseName: 'courseName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseModuleScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    moduleSlug: 'moduleSlug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseModuleScalarFieldEnum = (typeof CourseModuleScalarFieldEnum)[keyof typeof CourseModuleScalarFieldEnum]


  export const CourseModuleInputScalarFieldEnum: {
    id: 'id',
    moduleId: 'moduleId',
    inputId: 'inputId',
    encryptedData: 'encryptedData',
    iv: 'iv'
  };

  export type CourseModuleInputScalarFieldEnum = (typeof CourseModuleInputScalarFieldEnum)[keyof typeof CourseModuleInputScalarFieldEnum]


  export const CourseResourceStatusScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    resourceName: 'resourceName',
    completed: 'completed',
    completedAt: 'completedAt'
  };

  export type CourseResourceStatusScalarFieldEnum = (typeof CourseResourceStatusScalarFieldEnum)[keyof typeof CourseResourceStatusScalarFieldEnum]


  export const RecommendedArticleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    articleSlug: 'articleSlug',
    createdAt: 'createdAt'
  };

  export type RecommendedArticleScalarFieldEnum = (typeof RecommendedArticleScalarFieldEnum)[keyof typeof RecommendedArticleScalarFieldEnum]


  export const StressRatingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    rating: 'rating',
    createdAt: 'createdAt'
  };

  export type StressRatingScalarFieldEnum = (typeof StressRatingScalarFieldEnum)[keyof typeof StressRatingScalarFieldEnum]


  export const JournalEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    journalName: 'journalName',
    dateKey: 'dateKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JournalEntryScalarFieldEnum = (typeof JournalEntryScalarFieldEnum)[keyof typeof JournalEntryScalarFieldEnum]


  export const JournalEntryInputScalarFieldEnum: {
    id: 'id',
    journalEntryId: 'journalEntryId',
    inputKey: 'inputKey',
    encryptedData: 'encryptedData',
    iv: 'iv'
  };

  export type JournalEntryInputScalarFieldEnum = (typeof JournalEntryInputScalarFieldEnum)[keyof typeof JournalEntryInputScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    burnoutAssessments?: BurnoutAssessmentListRelationFilter
    exercises?: ExerciseListRelationFilter
    courses?: CourseListRelationFilter
    stressRatings?: StressRatingListRelationFilter
    journalEntries?: JournalEntryListRelationFilter
    recommendedArticles?: RecommendedArticleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    burnoutAssessments?: BurnoutAssessmentOrderByRelationAggregateInput
    exercises?: ExerciseOrderByRelationAggregateInput
    courses?: CourseOrderByRelationAggregateInput
    stressRatings?: StressRatingOrderByRelationAggregateInput
    journalEntries?: JournalEntryOrderByRelationAggregateInput
    recommendedArticles?: RecommendedArticleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    burnoutAssessments?: BurnoutAssessmentListRelationFilter
    exercises?: ExerciseListRelationFilter
    courses?: CourseListRelationFilter
    stressRatings?: StressRatingListRelationFilter
    journalEntries?: JournalEntryListRelationFilter
    recommendedArticles?: RecommendedArticleListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BurnoutAssessmentWhereInput = {
    AND?: BurnoutAssessmentWhereInput | BurnoutAssessmentWhereInput[]
    OR?: BurnoutAssessmentWhereInput[]
    NOT?: BurnoutAssessmentWhereInput | BurnoutAssessmentWhereInput[]
    id?: StringFilter<"BurnoutAssessment"> | string
    userId?: StringFilter<"BurnoutAssessment"> | string
    assessmentKey?: StringFilter<"BurnoutAssessment"> | string
    createdAt?: DateTimeFilter<"BurnoutAssessment"> | Date | string
    categoryScores?: JsonFilter<"BurnoutAssessment">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BurnoutAssessmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    assessmentKey?: SortOrder
    createdAt?: SortOrder
    categoryScores?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BurnoutAssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_assessmentKey?: BurnoutAssessmentUserIdAssessmentKeyCompoundUniqueInput
    AND?: BurnoutAssessmentWhereInput | BurnoutAssessmentWhereInput[]
    OR?: BurnoutAssessmentWhereInput[]
    NOT?: BurnoutAssessmentWhereInput | BurnoutAssessmentWhereInput[]
    userId?: StringFilter<"BurnoutAssessment"> | string
    assessmentKey?: StringFilter<"BurnoutAssessment"> | string
    createdAt?: DateTimeFilter<"BurnoutAssessment"> | Date | string
    categoryScores?: JsonFilter<"BurnoutAssessment">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_assessmentKey">

  export type BurnoutAssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    assessmentKey?: SortOrder
    createdAt?: SortOrder
    categoryScores?: SortOrder
    _count?: BurnoutAssessmentCountOrderByAggregateInput
    _max?: BurnoutAssessmentMaxOrderByAggregateInput
    _min?: BurnoutAssessmentMinOrderByAggregateInput
  }

  export type BurnoutAssessmentScalarWhereWithAggregatesInput = {
    AND?: BurnoutAssessmentScalarWhereWithAggregatesInput | BurnoutAssessmentScalarWhereWithAggregatesInput[]
    OR?: BurnoutAssessmentScalarWhereWithAggregatesInput[]
    NOT?: BurnoutAssessmentScalarWhereWithAggregatesInput | BurnoutAssessmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BurnoutAssessment"> | string
    userId?: StringWithAggregatesFilter<"BurnoutAssessment"> | string
    assessmentKey?: StringWithAggregatesFilter<"BurnoutAssessment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BurnoutAssessment"> | Date | string
    categoryScores?: JsonWithAggregatesFilter<"BurnoutAssessment">
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: StringFilter<"Exercise"> | string
    userId?: StringFilter<"Exercise"> | string
    exerciseSlug?: StringFilter<"Exercise"> | string
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    completedPrompts?: IntFilter<"Exercise"> | number
    completionPercentage?: FloatFilter<"Exercise"> | number
    encryptedUserInputs?: ExerciseInputListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedPrompts?: SortOrder
    completionPercentage?: SortOrder
    encryptedUserInputs?: ExerciseInputOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_exerciseSlug?: ExerciseUserIdExerciseSlugCompoundUniqueInput
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    userId?: StringFilter<"Exercise"> | string
    exerciseSlug?: StringFilter<"Exercise"> | string
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    completedPrompts?: IntFilter<"Exercise"> | number
    completionPercentage?: FloatFilter<"Exercise"> | number
    encryptedUserInputs?: ExerciseInputListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_exerciseSlug">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedPrompts?: SortOrder
    completionPercentage?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _avg?: ExerciseAvgOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
    _sum?: ExerciseSumOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercise"> | string
    userId?: StringWithAggregatesFilter<"Exercise"> | string
    exerciseSlug?: StringWithAggregatesFilter<"Exercise"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
    completedPrompts?: IntWithAggregatesFilter<"Exercise"> | number
    completionPercentage?: FloatWithAggregatesFilter<"Exercise"> | number
  }

  export type ExerciseInputWhereInput = {
    AND?: ExerciseInputWhereInput | ExerciseInputWhereInput[]
    OR?: ExerciseInputWhereInput[]
    NOT?: ExerciseInputWhereInput | ExerciseInputWhereInput[]
    id?: StringFilter<"ExerciseInput"> | string
    exerciseId?: StringFilter<"ExerciseInput"> | string
    inputKey?: StringFilter<"ExerciseInput"> | string
    encryptedData?: StringFilter<"ExerciseInput"> | string
    iv?: StringFilter<"ExerciseInput"> | string
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type ExerciseInputOrderByWithRelationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    inputKey?: SortOrder
    encryptedData?: SortOrder
    iv?: SortOrder
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type ExerciseInputWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    exerciseId_inputKey?: ExerciseInputExerciseIdInputKeyCompoundUniqueInput
    AND?: ExerciseInputWhereInput | ExerciseInputWhereInput[]
    OR?: ExerciseInputWhereInput[]
    NOT?: ExerciseInputWhereInput | ExerciseInputWhereInput[]
    exerciseId?: StringFilter<"ExerciseInput"> | string
    inputKey?: StringFilter<"ExerciseInput"> | string
    encryptedData?: StringFilter<"ExerciseInput"> | string
    iv?: StringFilter<"ExerciseInput"> | string
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id" | "exerciseId_inputKey">

  export type ExerciseInputOrderByWithAggregationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    inputKey?: SortOrder
    encryptedData?: SortOrder
    iv?: SortOrder
    _count?: ExerciseInputCountOrderByAggregateInput
    _max?: ExerciseInputMaxOrderByAggregateInput
    _min?: ExerciseInputMinOrderByAggregateInput
  }

  export type ExerciseInputScalarWhereWithAggregatesInput = {
    AND?: ExerciseInputScalarWhereWithAggregatesInput | ExerciseInputScalarWhereWithAggregatesInput[]
    OR?: ExerciseInputScalarWhereWithAggregatesInput[]
    NOT?: ExerciseInputScalarWhereWithAggregatesInput | ExerciseInputScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExerciseInput"> | string
    exerciseId?: StringWithAggregatesFilter<"ExerciseInput"> | string
    inputKey?: StringWithAggregatesFilter<"ExerciseInput"> | string
    encryptedData?: StringWithAggregatesFilter<"ExerciseInput"> | string
    iv?: StringWithAggregatesFilter<"ExerciseInput"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    userId?: StringFilter<"Course"> | string
    courseSlug?: StringFilter<"Course"> | string
    courseName?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    modules?: CourseModuleListRelationFilter
    resourcesStatus?: CourseResourceStatusListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseSlug?: SortOrder
    courseName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    modules?: CourseModuleOrderByRelationAggregateInput
    resourcesStatus?: CourseResourceStatusOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_courseSlug?: CourseUserIdCourseSlugCompoundUniqueInput
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    userId?: StringFilter<"Course"> | string
    courseSlug?: StringFilter<"Course"> | string
    courseName?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    modules?: CourseModuleListRelationFilter
    resourcesStatus?: CourseResourceStatusListRelationFilter
  }, "id" | "userId_courseSlug">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseSlug?: SortOrder
    courseName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    userId?: StringWithAggregatesFilter<"Course"> | string
    courseSlug?: StringWithAggregatesFilter<"Course"> | string
    courseName?: StringWithAggregatesFilter<"Course"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type CourseModuleWhereInput = {
    AND?: CourseModuleWhereInput | CourseModuleWhereInput[]
    OR?: CourseModuleWhereInput[]
    NOT?: CourseModuleWhereInput | CourseModuleWhereInput[]
    id?: StringFilter<"CourseModule"> | string
    courseId?: StringFilter<"CourseModule"> | string
    moduleSlug?: StringFilter<"CourseModule"> | string
    createdAt?: DateTimeFilter<"CourseModule"> | Date | string
    updatedAt?: DateTimeFilter<"CourseModule"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    encryptedInputs?: CourseModuleInputListRelationFilter
  }

  export type CourseModuleOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    moduleSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    encryptedInputs?: CourseModuleInputOrderByRelationAggregateInput
  }

  export type CourseModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId_moduleSlug?: CourseModuleCourseIdModuleSlugCompoundUniqueInput
    AND?: CourseModuleWhereInput | CourseModuleWhereInput[]
    OR?: CourseModuleWhereInput[]
    NOT?: CourseModuleWhereInput | CourseModuleWhereInput[]
    courseId?: StringFilter<"CourseModule"> | string
    moduleSlug?: StringFilter<"CourseModule"> | string
    createdAt?: DateTimeFilter<"CourseModule"> | Date | string
    updatedAt?: DateTimeFilter<"CourseModule"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    encryptedInputs?: CourseModuleInputListRelationFilter
  }, "id" | "courseId_moduleSlug">

  export type CourseModuleOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    moduleSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseModuleCountOrderByAggregateInput
    _max?: CourseModuleMaxOrderByAggregateInput
    _min?: CourseModuleMinOrderByAggregateInput
  }

  export type CourseModuleScalarWhereWithAggregatesInput = {
    AND?: CourseModuleScalarWhereWithAggregatesInput | CourseModuleScalarWhereWithAggregatesInput[]
    OR?: CourseModuleScalarWhereWithAggregatesInput[]
    NOT?: CourseModuleScalarWhereWithAggregatesInput | CourseModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseModule"> | string
    courseId?: StringWithAggregatesFilter<"CourseModule"> | string
    moduleSlug?: StringWithAggregatesFilter<"CourseModule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CourseModule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseModule"> | Date | string
  }

  export type CourseModuleInputWhereInput = {
    AND?: CourseModuleInputWhereInput | CourseModuleInputWhereInput[]
    OR?: CourseModuleInputWhereInput[]
    NOT?: CourseModuleInputWhereInput | CourseModuleInputWhereInput[]
    id?: StringFilter<"CourseModuleInput"> | string
    moduleId?: StringFilter<"CourseModuleInput"> | string
    inputId?: StringFilter<"CourseModuleInput"> | string
    encryptedData?: StringFilter<"CourseModuleInput"> | string
    iv?: StringFilter<"CourseModuleInput"> | string
    module?: XOR<CourseModuleScalarRelationFilter, CourseModuleWhereInput>
  }

  export type CourseModuleInputOrderByWithRelationInput = {
    id?: SortOrder
    moduleId?: SortOrder
    inputId?: SortOrder
    encryptedData?: SortOrder
    iv?: SortOrder
    module?: CourseModuleOrderByWithRelationInput
  }

  export type CourseModuleInputWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    moduleId_inputId?: CourseModuleInputModuleIdInputIdCompoundUniqueInput
    AND?: CourseModuleInputWhereInput | CourseModuleInputWhereInput[]
    OR?: CourseModuleInputWhereInput[]
    NOT?: CourseModuleInputWhereInput | CourseModuleInputWhereInput[]
    moduleId?: StringFilter<"CourseModuleInput"> | string
    inputId?: StringFilter<"CourseModuleInput"> | string
    encryptedData?: StringFilter<"CourseModuleInput"> | string
    iv?: StringFilter<"CourseModuleInput"> | string
    module?: XOR<CourseModuleScalarRelationFilter, CourseModuleWhereInput>
  }, "id" | "moduleId_inputId">

  export type CourseModuleInputOrderByWithAggregationInput = {
    id?: SortOrder
    moduleId?: SortOrder
    inputId?: SortOrder
    encryptedData?: SortOrder
    iv?: SortOrder
    _count?: CourseModuleInputCountOrderByAggregateInput
    _max?: CourseModuleInputMaxOrderByAggregateInput
    _min?: CourseModuleInputMinOrderByAggregateInput
  }

  export type CourseModuleInputScalarWhereWithAggregatesInput = {
    AND?: CourseModuleInputScalarWhereWithAggregatesInput | CourseModuleInputScalarWhereWithAggregatesInput[]
    OR?: CourseModuleInputScalarWhereWithAggregatesInput[]
    NOT?: CourseModuleInputScalarWhereWithAggregatesInput | CourseModuleInputScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseModuleInput"> | string
    moduleId?: StringWithAggregatesFilter<"CourseModuleInput"> | string
    inputId?: StringWithAggregatesFilter<"CourseModuleInput"> | string
    encryptedData?: StringWithAggregatesFilter<"CourseModuleInput"> | string
    iv?: StringWithAggregatesFilter<"CourseModuleInput"> | string
  }

  export type CourseResourceStatusWhereInput = {
    AND?: CourseResourceStatusWhereInput | CourseResourceStatusWhereInput[]
    OR?: CourseResourceStatusWhereInput[]
    NOT?: CourseResourceStatusWhereInput | CourseResourceStatusWhereInput[]
    id?: StringFilter<"CourseResourceStatus"> | string
    courseId?: StringFilter<"CourseResourceStatus"> | string
    resourceName?: StringFilter<"CourseResourceStatus"> | string
    completed?: BoolFilter<"CourseResourceStatus"> | boolean
    completedAt?: DateTimeNullableFilter<"CourseResourceStatus"> | Date | string | null
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CourseResourceStatusOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    resourceName?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type CourseResourceStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId_resourceName?: CourseResourceStatusCourseIdResourceNameCompoundUniqueInput
    AND?: CourseResourceStatusWhereInput | CourseResourceStatusWhereInput[]
    OR?: CourseResourceStatusWhereInput[]
    NOT?: CourseResourceStatusWhereInput | CourseResourceStatusWhereInput[]
    courseId?: StringFilter<"CourseResourceStatus"> | string
    resourceName?: StringFilter<"CourseResourceStatus"> | string
    completed?: BoolFilter<"CourseResourceStatus"> | boolean
    completedAt?: DateTimeNullableFilter<"CourseResourceStatus"> | Date | string | null
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "courseId_resourceName">

  export type CourseResourceStatusOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    resourceName?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: CourseResourceStatusCountOrderByAggregateInput
    _max?: CourseResourceStatusMaxOrderByAggregateInput
    _min?: CourseResourceStatusMinOrderByAggregateInput
  }

  export type CourseResourceStatusScalarWhereWithAggregatesInput = {
    AND?: CourseResourceStatusScalarWhereWithAggregatesInput | CourseResourceStatusScalarWhereWithAggregatesInput[]
    OR?: CourseResourceStatusScalarWhereWithAggregatesInput[]
    NOT?: CourseResourceStatusScalarWhereWithAggregatesInput | CourseResourceStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseResourceStatus"> | string
    courseId?: StringWithAggregatesFilter<"CourseResourceStatus"> | string
    resourceName?: StringWithAggregatesFilter<"CourseResourceStatus"> | string
    completed?: BoolWithAggregatesFilter<"CourseResourceStatus"> | boolean
    completedAt?: DateTimeNullableWithAggregatesFilter<"CourseResourceStatus"> | Date | string | null
  }

  export type RecommendedArticleWhereInput = {
    AND?: RecommendedArticleWhereInput | RecommendedArticleWhereInput[]
    OR?: RecommendedArticleWhereInput[]
    NOT?: RecommendedArticleWhereInput | RecommendedArticleWhereInput[]
    id?: StringFilter<"RecommendedArticle"> | string
    userId?: StringFilter<"RecommendedArticle"> | string
    articleSlug?: StringFilter<"RecommendedArticle"> | string
    createdAt?: DateTimeFilter<"RecommendedArticle"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RecommendedArticleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    articleSlug?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RecommendedArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_articleSlug?: RecommendedArticleUserIdArticleSlugCompoundUniqueInput
    AND?: RecommendedArticleWhereInput | RecommendedArticleWhereInput[]
    OR?: RecommendedArticleWhereInput[]
    NOT?: RecommendedArticleWhereInput | RecommendedArticleWhereInput[]
    userId?: StringFilter<"RecommendedArticle"> | string
    articleSlug?: StringFilter<"RecommendedArticle"> | string
    createdAt?: DateTimeFilter<"RecommendedArticle"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_articleSlug">

  export type RecommendedArticleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    articleSlug?: SortOrder
    createdAt?: SortOrder
    _count?: RecommendedArticleCountOrderByAggregateInput
    _max?: RecommendedArticleMaxOrderByAggregateInput
    _min?: RecommendedArticleMinOrderByAggregateInput
  }

  export type RecommendedArticleScalarWhereWithAggregatesInput = {
    AND?: RecommendedArticleScalarWhereWithAggregatesInput | RecommendedArticleScalarWhereWithAggregatesInput[]
    OR?: RecommendedArticleScalarWhereWithAggregatesInput[]
    NOT?: RecommendedArticleScalarWhereWithAggregatesInput | RecommendedArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecommendedArticle"> | string
    userId?: StringWithAggregatesFilter<"RecommendedArticle"> | string
    articleSlug?: StringWithAggregatesFilter<"RecommendedArticle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RecommendedArticle"> | Date | string
  }

  export type StressRatingWhereInput = {
    AND?: StressRatingWhereInput | StressRatingWhereInput[]
    OR?: StressRatingWhereInput[]
    NOT?: StressRatingWhereInput | StressRatingWhereInput[]
    id?: StringFilter<"StressRating"> | string
    userId?: StringFilter<"StressRating"> | string
    rating?: IntFilter<"StressRating"> | number
    createdAt?: DateTimeFilter<"StressRating"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StressRatingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StressRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StressRatingWhereInput | StressRatingWhereInput[]
    OR?: StressRatingWhereInput[]
    NOT?: StressRatingWhereInput | StressRatingWhereInput[]
    userId?: StringFilter<"StressRating"> | string
    rating?: IntFilter<"StressRating"> | number
    createdAt?: DateTimeFilter<"StressRating"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StressRatingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    _count?: StressRatingCountOrderByAggregateInput
    _avg?: StressRatingAvgOrderByAggregateInput
    _max?: StressRatingMaxOrderByAggregateInput
    _min?: StressRatingMinOrderByAggregateInput
    _sum?: StressRatingSumOrderByAggregateInput
  }

  export type StressRatingScalarWhereWithAggregatesInput = {
    AND?: StressRatingScalarWhereWithAggregatesInput | StressRatingScalarWhereWithAggregatesInput[]
    OR?: StressRatingScalarWhereWithAggregatesInput[]
    NOT?: StressRatingScalarWhereWithAggregatesInput | StressRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StressRating"> | string
    userId?: StringWithAggregatesFilter<"StressRating"> | string
    rating?: IntWithAggregatesFilter<"StressRating"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StressRating"> | Date | string
  }

  export type JournalEntryWhereInput = {
    AND?: JournalEntryWhereInput | JournalEntryWhereInput[]
    OR?: JournalEntryWhereInput[]
    NOT?: JournalEntryWhereInput | JournalEntryWhereInput[]
    id?: StringFilter<"JournalEntry"> | string
    userId?: StringFilter<"JournalEntry"> | string
    journalName?: StringFilter<"JournalEntry"> | string
    dateKey?: StringFilter<"JournalEntry"> | string
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    inputs?: JournalEntryInputListRelationFilter
  }

  export type JournalEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    journalName?: SortOrder
    dateKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    inputs?: JournalEntryInputOrderByRelationAggregateInput
  }

  export type JournalEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_journalName_dateKey?: JournalEntryUserIdJournalNameDateKeyCompoundUniqueInput
    AND?: JournalEntryWhereInput | JournalEntryWhereInput[]
    OR?: JournalEntryWhereInput[]
    NOT?: JournalEntryWhereInput | JournalEntryWhereInput[]
    userId?: StringFilter<"JournalEntry"> | string
    journalName?: StringFilter<"JournalEntry"> | string
    dateKey?: StringFilter<"JournalEntry"> | string
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    inputs?: JournalEntryInputListRelationFilter
  }, "id" | "userId_journalName_dateKey">

  export type JournalEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    journalName?: SortOrder
    dateKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JournalEntryCountOrderByAggregateInput
    _max?: JournalEntryMaxOrderByAggregateInput
    _min?: JournalEntryMinOrderByAggregateInput
  }

  export type JournalEntryScalarWhereWithAggregatesInput = {
    AND?: JournalEntryScalarWhereWithAggregatesInput | JournalEntryScalarWhereWithAggregatesInput[]
    OR?: JournalEntryScalarWhereWithAggregatesInput[]
    NOT?: JournalEntryScalarWhereWithAggregatesInput | JournalEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JournalEntry"> | string
    userId?: StringWithAggregatesFilter<"JournalEntry"> | string
    journalName?: StringWithAggregatesFilter<"JournalEntry"> | string
    dateKey?: StringWithAggregatesFilter<"JournalEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string
  }

  export type JournalEntryInputWhereInput = {
    AND?: JournalEntryInputWhereInput | JournalEntryInputWhereInput[]
    OR?: JournalEntryInputWhereInput[]
    NOT?: JournalEntryInputWhereInput | JournalEntryInputWhereInput[]
    id?: StringFilter<"JournalEntryInput"> | string
    journalEntryId?: StringFilter<"JournalEntryInput"> | string
    inputKey?: StringFilter<"JournalEntryInput"> | string
    encryptedData?: StringFilter<"JournalEntryInput"> | string
    iv?: StringFilter<"JournalEntryInput"> | string
    journalEntry?: XOR<JournalEntryScalarRelationFilter, JournalEntryWhereInput>
  }

  export type JournalEntryInputOrderByWithRelationInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    inputKey?: SortOrder
    encryptedData?: SortOrder
    iv?: SortOrder
    journalEntry?: JournalEntryOrderByWithRelationInput
  }

  export type JournalEntryInputWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    journalEntryId_inputKey?: JournalEntryInputJournalEntryIdInputKeyCompoundUniqueInput
    AND?: JournalEntryInputWhereInput | JournalEntryInputWhereInput[]
    OR?: JournalEntryInputWhereInput[]
    NOT?: JournalEntryInputWhereInput | JournalEntryInputWhereInput[]
    journalEntryId?: StringFilter<"JournalEntryInput"> | string
    inputKey?: StringFilter<"JournalEntryInput"> | string
    encryptedData?: StringFilter<"JournalEntryInput"> | string
    iv?: StringFilter<"JournalEntryInput"> | string
    journalEntry?: XOR<JournalEntryScalarRelationFilter, JournalEntryWhereInput>
  }, "id" | "journalEntryId_inputKey">

  export type JournalEntryInputOrderByWithAggregationInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    inputKey?: SortOrder
    encryptedData?: SortOrder
    iv?: SortOrder
    _count?: JournalEntryInputCountOrderByAggregateInput
    _max?: JournalEntryInputMaxOrderByAggregateInput
    _min?: JournalEntryInputMinOrderByAggregateInput
  }

  export type JournalEntryInputScalarWhereWithAggregatesInput = {
    AND?: JournalEntryInputScalarWhereWithAggregatesInput | JournalEntryInputScalarWhereWithAggregatesInput[]
    OR?: JournalEntryInputScalarWhereWithAggregatesInput[]
    NOT?: JournalEntryInputScalarWhereWithAggregatesInput | JournalEntryInputScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JournalEntryInput"> | string
    journalEntryId?: StringWithAggregatesFilter<"JournalEntryInput"> | string
    inputKey?: StringWithAggregatesFilter<"JournalEntryInput"> | string
    encryptedData?: StringWithAggregatesFilter<"JournalEntryInput"> | string
    iv?: StringWithAggregatesFilter<"JournalEntryInput"> | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    burnoutAssessments?: BurnoutAssessmentCreateNestedManyWithoutUserInput
    exercises?: ExerciseCreateNestedManyWithoutUserInput
    courses?: CourseCreateNestedManyWithoutUserInput
    stressRatings?: StressRatingCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    recommendedArticles?: RecommendedArticleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    burnoutAssessments?: BurnoutAssessmentUncheckedCreateNestedManyWithoutUserInput
    exercises?: ExerciseUncheckedCreateNestedManyWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    stressRatings?: StressRatingUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    recommendedArticles?: RecommendedArticleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    burnoutAssessments?: BurnoutAssessmentUpdateManyWithoutUserNestedInput
    exercises?: ExerciseUpdateManyWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutUserNestedInput
    stressRatings?: StressRatingUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    recommendedArticles?: RecommendedArticleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    burnoutAssessments?: BurnoutAssessmentUncheckedUpdateManyWithoutUserNestedInput
    exercises?: ExerciseUncheckedUpdateManyWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    stressRatings?: StressRatingUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    recommendedArticles?: RecommendedArticleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BurnoutAssessmentCreateInput = {
    id?: string
    assessmentKey: string
    createdAt?: Date | string
    categoryScores: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutBurnoutAssessmentsInput
  }

  export type BurnoutAssessmentUncheckedCreateInput = {
    id?: string
    userId: string
    assessmentKey: string
    createdAt?: Date | string
    categoryScores: JsonNullValueInput | InputJsonValue
  }

  export type BurnoutAssessmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryScores?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutBurnoutAssessmentsNestedInput
  }

  export type BurnoutAssessmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assessmentKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryScores?: JsonNullValueInput | InputJsonValue
  }

  export type BurnoutAssessmentCreateManyInput = {
    id?: string
    userId: string
    assessmentKey: string
    createdAt?: Date | string
    categoryScores: JsonNullValueInput | InputJsonValue
  }

  export type BurnoutAssessmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryScores?: JsonNullValueInput | InputJsonValue
  }

  export type BurnoutAssessmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assessmentKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryScores?: JsonNullValueInput | InputJsonValue
  }

  export type ExerciseCreateInput = {
    id?: string
    exerciseSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completedPrompts?: number
    completionPercentage?: number
    encryptedUserInputs?: ExerciseInputCreateNestedManyWithoutExerciseInput
    user: UserCreateNestedOneWithoutExercisesInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: string
    userId: string
    exerciseSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completedPrompts?: number
    completionPercentage?: number
    encryptedUserInputs?: ExerciseInputUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedPrompts?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    encryptedUserInputs?: ExerciseInputUpdateManyWithoutExerciseNestedInput
    user?: UserUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exerciseSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedPrompts?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    encryptedUserInputs?: ExerciseInputUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: string
    userId: string
    exerciseSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completedPrompts?: number
    completionPercentage?: number
  }

  export type ExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedPrompts?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exerciseSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedPrompts?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type ExerciseInputCreateInput = {
    id?: string
    inputKey: string
    encryptedData: string
    iv: string
    exercise: ExerciseCreateNestedOneWithoutEncryptedUserInputsInput
  }

  export type ExerciseInputUncheckedCreateInput = {
    id?: string
    exerciseId: string
    inputKey: string
    encryptedData: string
    iv: string
  }

  export type ExerciseInputUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputKey?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    exercise?: ExerciseUpdateOneRequiredWithoutEncryptedUserInputsNestedInput
  }

  export type ExerciseInputUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    inputKey?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseInputCreateManyInput = {
    id?: string
    exerciseId: string
    inputKey: string
    encryptedData: string
    iv: string
  }

  export type ExerciseInputUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputKey?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseInputUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    inputKey?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    id?: string
    courseSlug: string
    courseName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoursesInput
    modules?: CourseModuleCreateNestedManyWithoutCourseInput
    resourcesStatus?: CourseResourceStatusCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    userId: string
    courseSlug: string
    courseName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: CourseModuleUncheckedCreateNestedManyWithoutCourseInput
    resourcesStatus?: CourseResourceStatusUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseSlug?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursesNestedInput
    modules?: CourseModuleUpdateManyWithoutCourseNestedInput
    resourcesStatus?: CourseResourceStatusUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseSlug?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: CourseModuleUncheckedUpdateManyWithoutCourseNestedInput
    resourcesStatus?: CourseResourceStatusUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    userId: string
    courseSlug: string
    courseName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseSlug?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseSlug?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseModuleCreateInput = {
    id?: string
    moduleSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutModulesInput
    encryptedInputs?: CourseModuleInputCreateNestedManyWithoutModuleInput
  }

  export type CourseModuleUncheckedCreateInput = {
    id?: string
    courseId: string
    moduleSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    encryptedInputs?: CourseModuleInputUncheckedCreateNestedManyWithoutModuleInput
  }

  export type CourseModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutModulesNestedInput
    encryptedInputs?: CourseModuleInputUpdateManyWithoutModuleNestedInput
  }

  export type CourseModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    moduleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encryptedInputs?: CourseModuleInputUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type CourseModuleCreateManyInput = {
    id?: string
    courseId: string
    moduleSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    moduleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseModuleInputCreateInput = {
    id?: string
    inputId: string
    encryptedData: string
    iv: string
    module: CourseModuleCreateNestedOneWithoutEncryptedInputsInput
  }

  export type CourseModuleInputUncheckedCreateInput = {
    id?: string
    moduleId: string
    inputId: string
    encryptedData: string
    iv: string
  }

  export type CourseModuleInputUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputId?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    module?: CourseModuleUpdateOneRequiredWithoutEncryptedInputsNestedInput
  }

  export type CourseModuleInputUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    inputId?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type CourseModuleInputCreateManyInput = {
    id?: string
    moduleId: string
    inputId: string
    encryptedData: string
    iv: string
  }

  export type CourseModuleInputUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputId?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type CourseModuleInputUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    inputId?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type CourseResourceStatusCreateInput = {
    id?: string
    resourceName: string
    completed?: boolean
    completedAt?: Date | string | null
    course: CourseCreateNestedOneWithoutResourcesStatusInput
  }

  export type CourseResourceStatusUncheckedCreateInput = {
    id?: string
    courseId: string
    resourceName: string
    completed?: boolean
    completedAt?: Date | string | null
  }

  export type CourseResourceStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resourceName?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: CourseUpdateOneRequiredWithoutResourcesStatusNestedInput
  }

  export type CourseResourceStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    resourceName?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseResourceStatusCreateManyInput = {
    id?: string
    courseId: string
    resourceName: string
    completed?: boolean
    completedAt?: Date | string | null
  }

  export type CourseResourceStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resourceName?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseResourceStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    resourceName?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecommendedArticleCreateInput = {
    id?: string
    articleSlug: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRecommendedArticlesInput
  }

  export type RecommendedArticleUncheckedCreateInput = {
    id?: string
    userId: string
    articleSlug: string
    createdAt?: Date | string
  }

  export type RecommendedArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecommendedArticlesNestedInput
  }

  export type RecommendedArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    articleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendedArticleCreateManyInput = {
    id?: string
    userId: string
    articleSlug: string
    createdAt?: Date | string
  }

  export type RecommendedArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendedArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    articleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StressRatingCreateInput = {
    id?: string
    rating: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStressRatingsInput
  }

  export type StressRatingUncheckedCreateInput = {
    id?: string
    userId: string
    rating: number
    createdAt?: Date | string
  }

  export type StressRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStressRatingsNestedInput
  }

  export type StressRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StressRatingCreateManyInput = {
    id?: string
    userId: string
    rating: number
    createdAt?: Date | string
  }

  export type StressRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StressRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryCreateInput = {
    id?: string
    journalName: string
    dateKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJournalEntriesInput
    inputs?: JournalEntryInputCreateNestedManyWithoutJournalEntryInput
  }

  export type JournalEntryUncheckedCreateInput = {
    id?: string
    userId: string
    journalName: string
    dateKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputs?: JournalEntryInputUncheckedCreateNestedManyWithoutJournalEntryInput
  }

  export type JournalEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalName?: StringFieldUpdateOperationsInput | string
    dateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJournalEntriesNestedInput
    inputs?: JournalEntryInputUpdateManyWithoutJournalEntryNestedInput
  }

  export type JournalEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    journalName?: StringFieldUpdateOperationsInput | string
    dateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputs?: JournalEntryInputUncheckedUpdateManyWithoutJournalEntryNestedInput
  }

  export type JournalEntryCreateManyInput = {
    id?: string
    userId: string
    journalName: string
    dateKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalName?: StringFieldUpdateOperationsInput | string
    dateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    journalName?: StringFieldUpdateOperationsInput | string
    dateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryInputCreateInput = {
    id?: string
    inputKey: string
    encryptedData: string
    iv: string
    journalEntry: JournalEntryCreateNestedOneWithoutInputsInput
  }

  export type JournalEntryInputUncheckedCreateInput = {
    id?: string
    journalEntryId: string
    inputKey: string
    encryptedData: string
    iv: string
  }

  export type JournalEntryInputUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputKey?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    journalEntry?: JournalEntryUpdateOneRequiredWithoutInputsNestedInput
  }

  export type JournalEntryInputUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalEntryId?: StringFieldUpdateOperationsInput | string
    inputKey?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type JournalEntryInputCreateManyInput = {
    id?: string
    journalEntryId: string
    inputKey: string
    encryptedData: string
    iv: string
  }

  export type JournalEntryInputUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputKey?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type JournalEntryInputUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalEntryId?: StringFieldUpdateOperationsInput | string
    inputKey?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BurnoutAssessmentListRelationFilter = {
    every?: BurnoutAssessmentWhereInput
    some?: BurnoutAssessmentWhereInput
    none?: BurnoutAssessmentWhereInput
  }

  export type ExerciseListRelationFilter = {
    every?: ExerciseWhereInput
    some?: ExerciseWhereInput
    none?: ExerciseWhereInput
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type StressRatingListRelationFilter = {
    every?: StressRatingWhereInput
    some?: StressRatingWhereInput
    none?: StressRatingWhereInput
  }

  export type JournalEntryListRelationFilter = {
    every?: JournalEntryWhereInput
    some?: JournalEntryWhereInput
    none?: JournalEntryWhereInput
  }

  export type RecommendedArticleListRelationFilter = {
    every?: RecommendedArticleWhereInput
    some?: RecommendedArticleWhereInput
    none?: RecommendedArticleWhereInput
  }

  export type BurnoutAssessmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StressRatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JournalEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecommendedArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BurnoutAssessmentUserIdAssessmentKeyCompoundUniqueInput = {
    userId: string
    assessmentKey: string
  }

  export type BurnoutAssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assessmentKey?: SortOrder
    createdAt?: SortOrder
    categoryScores?: SortOrder
  }

  export type BurnoutAssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assessmentKey?: SortOrder
    createdAt?: SortOrder
  }

  export type BurnoutAssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assessmentKey?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ExerciseInputListRelationFilter = {
    every?: ExerciseInputWhereInput
    some?: ExerciseInputWhereInput
    none?: ExerciseInputWhereInput
  }

  export type ExerciseInputOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseUserIdExerciseSlugCompoundUniqueInput = {
    userId: string
    exerciseSlug: string
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedPrompts?: SortOrder
    completionPercentage?: SortOrder
  }

  export type ExerciseAvgOrderByAggregateInput = {
    completedPrompts?: SortOrder
    completionPercentage?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedPrompts?: SortOrder
    completionPercentage?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedPrompts?: SortOrder
    completionPercentage?: SortOrder
  }

  export type ExerciseSumOrderByAggregateInput = {
    completedPrompts?: SortOrder
    completionPercentage?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type ExerciseInputExerciseIdInputKeyCompoundUniqueInput = {
    exerciseId: string
    inputKey: string
  }

  export type ExerciseInputCountOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    inputKey?: SortOrder
    encryptedData?: SortOrder
    iv?: SortOrder
  }

  export type ExerciseInputMaxOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    inputKey?: SortOrder
    encryptedData?: SortOrder
    iv?: SortOrder
  }

  export type ExerciseInputMinOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    inputKey?: SortOrder
    encryptedData?: SortOrder
    iv?: SortOrder
  }

  export type CourseModuleListRelationFilter = {
    every?: CourseModuleWhereInput
    some?: CourseModuleWhereInput
    none?: CourseModuleWhereInput
  }

  export type CourseResourceStatusListRelationFilter = {
    every?: CourseResourceStatusWhereInput
    some?: CourseResourceStatusWhereInput
    none?: CourseResourceStatusWhereInput
  }

  export type CourseModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseResourceStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseUserIdCourseSlugCompoundUniqueInput = {
    userId: string
    courseSlug: string
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseSlug?: SortOrder
    courseName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseSlug?: SortOrder
    courseName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseSlug?: SortOrder
    courseName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type CourseModuleInputListRelationFilter = {
    every?: CourseModuleInputWhereInput
    some?: CourseModuleInputWhereInput
    none?: CourseModuleInputWhereInput
  }

  export type CourseModuleInputOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseModuleCourseIdModuleSlugCompoundUniqueInput = {
    courseId: string
    moduleSlug: string
  }

  export type CourseModuleCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    moduleSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    moduleSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseModuleMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    moduleSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseModuleScalarRelationFilter = {
    is?: CourseModuleWhereInput
    isNot?: CourseModuleWhereInput
  }

  export type CourseModuleInputModuleIdInputIdCompoundUniqueInput = {
    moduleId: string
    inputId: string
  }

  export type CourseModuleInputCountOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    inputId?: SortOrder
    encryptedData?: SortOrder
    iv?: SortOrder
  }

  export type CourseModuleInputMaxOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    inputId?: SortOrder
    encryptedData?: SortOrder
    iv?: SortOrder
  }

  export type CourseModuleInputMinOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    inputId?: SortOrder
    encryptedData?: SortOrder
    iv?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CourseResourceStatusCourseIdResourceNameCompoundUniqueInput = {
    courseId: string
    resourceName: string
  }

  export type CourseResourceStatusCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    resourceName?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
  }

  export type CourseResourceStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    resourceName?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
  }

  export type CourseResourceStatusMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    resourceName?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RecommendedArticleUserIdArticleSlugCompoundUniqueInput = {
    userId: string
    articleSlug: string
  }

  export type RecommendedArticleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleSlug?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendedArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleSlug?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendedArticleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleSlug?: SortOrder
    createdAt?: SortOrder
  }

  export type StressRatingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type StressRatingAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type StressRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type StressRatingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type StressRatingSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type JournalEntryInputListRelationFilter = {
    every?: JournalEntryInputWhereInput
    some?: JournalEntryInputWhereInput
    none?: JournalEntryInputWhereInput
  }

  export type JournalEntryInputOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JournalEntryUserIdJournalNameDateKeyCompoundUniqueInput = {
    userId: string
    journalName: string
    dateKey: string
  }

  export type JournalEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    journalName?: SortOrder
    dateKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    journalName?: SortOrder
    dateKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    journalName?: SortOrder
    dateKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalEntryScalarRelationFilter = {
    is?: JournalEntryWhereInput
    isNot?: JournalEntryWhereInput
  }

  export type JournalEntryInputJournalEntryIdInputKeyCompoundUniqueInput = {
    journalEntryId: string
    inputKey: string
  }

  export type JournalEntryInputCountOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    inputKey?: SortOrder
    encryptedData?: SortOrder
    iv?: SortOrder
  }

  export type JournalEntryInputMaxOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    inputKey?: SortOrder
    encryptedData?: SortOrder
    iv?: SortOrder
  }

  export type JournalEntryInputMinOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    inputKey?: SortOrder
    encryptedData?: SortOrder
    iv?: SortOrder
  }

  export type BurnoutAssessmentCreateNestedManyWithoutUserInput = {
    create?: XOR<BurnoutAssessmentCreateWithoutUserInput, BurnoutAssessmentUncheckedCreateWithoutUserInput> | BurnoutAssessmentCreateWithoutUserInput[] | BurnoutAssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BurnoutAssessmentCreateOrConnectWithoutUserInput | BurnoutAssessmentCreateOrConnectWithoutUserInput[]
    createMany?: BurnoutAssessmentCreateManyUserInputEnvelope
    connect?: BurnoutAssessmentWhereUniqueInput | BurnoutAssessmentWhereUniqueInput[]
  }

  export type ExerciseCreateNestedManyWithoutUserInput = {
    create?: XOR<ExerciseCreateWithoutUserInput, ExerciseUncheckedCreateWithoutUserInput> | ExerciseCreateWithoutUserInput[] | ExerciseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutUserInput | ExerciseCreateOrConnectWithoutUserInput[]
    createMany?: ExerciseCreateManyUserInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StressRatingCreateNestedManyWithoutUserInput = {
    create?: XOR<StressRatingCreateWithoutUserInput, StressRatingUncheckedCreateWithoutUserInput> | StressRatingCreateWithoutUserInput[] | StressRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StressRatingCreateOrConnectWithoutUserInput | StressRatingCreateOrConnectWithoutUserInput[]
    createMany?: StressRatingCreateManyUserInputEnvelope
    connect?: StressRatingWhereUniqueInput | StressRatingWhereUniqueInput[]
  }

  export type JournalEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
  }

  export type RecommendedArticleCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendedArticleCreateWithoutUserInput, RecommendedArticleUncheckedCreateWithoutUserInput> | RecommendedArticleCreateWithoutUserInput[] | RecommendedArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendedArticleCreateOrConnectWithoutUserInput | RecommendedArticleCreateOrConnectWithoutUserInput[]
    createMany?: RecommendedArticleCreateManyUserInputEnvelope
    connect?: RecommendedArticleWhereUniqueInput | RecommendedArticleWhereUniqueInput[]
  }

  export type BurnoutAssessmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BurnoutAssessmentCreateWithoutUserInput, BurnoutAssessmentUncheckedCreateWithoutUserInput> | BurnoutAssessmentCreateWithoutUserInput[] | BurnoutAssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BurnoutAssessmentCreateOrConnectWithoutUserInput | BurnoutAssessmentCreateOrConnectWithoutUserInput[]
    createMany?: BurnoutAssessmentCreateManyUserInputEnvelope
    connect?: BurnoutAssessmentWhereUniqueInput | BurnoutAssessmentWhereUniqueInput[]
  }

  export type ExerciseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExerciseCreateWithoutUserInput, ExerciseUncheckedCreateWithoutUserInput> | ExerciseCreateWithoutUserInput[] | ExerciseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutUserInput | ExerciseCreateOrConnectWithoutUserInput[]
    createMany?: ExerciseCreateManyUserInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StressRatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StressRatingCreateWithoutUserInput, StressRatingUncheckedCreateWithoutUserInput> | StressRatingCreateWithoutUserInput[] | StressRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StressRatingCreateOrConnectWithoutUserInput | StressRatingCreateOrConnectWithoutUserInput[]
    createMany?: StressRatingCreateManyUserInputEnvelope
    connect?: StressRatingWhereUniqueInput | StressRatingWhereUniqueInput[]
  }

  export type JournalEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
  }

  export type RecommendedArticleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendedArticleCreateWithoutUserInput, RecommendedArticleUncheckedCreateWithoutUserInput> | RecommendedArticleCreateWithoutUserInput[] | RecommendedArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendedArticleCreateOrConnectWithoutUserInput | RecommendedArticleCreateOrConnectWithoutUserInput[]
    createMany?: RecommendedArticleCreateManyUserInputEnvelope
    connect?: RecommendedArticleWhereUniqueInput | RecommendedArticleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BurnoutAssessmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<BurnoutAssessmentCreateWithoutUserInput, BurnoutAssessmentUncheckedCreateWithoutUserInput> | BurnoutAssessmentCreateWithoutUserInput[] | BurnoutAssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BurnoutAssessmentCreateOrConnectWithoutUserInput | BurnoutAssessmentCreateOrConnectWithoutUserInput[]
    upsert?: BurnoutAssessmentUpsertWithWhereUniqueWithoutUserInput | BurnoutAssessmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BurnoutAssessmentCreateManyUserInputEnvelope
    set?: BurnoutAssessmentWhereUniqueInput | BurnoutAssessmentWhereUniqueInput[]
    disconnect?: BurnoutAssessmentWhereUniqueInput | BurnoutAssessmentWhereUniqueInput[]
    delete?: BurnoutAssessmentWhereUniqueInput | BurnoutAssessmentWhereUniqueInput[]
    connect?: BurnoutAssessmentWhereUniqueInput | BurnoutAssessmentWhereUniqueInput[]
    update?: BurnoutAssessmentUpdateWithWhereUniqueWithoutUserInput | BurnoutAssessmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BurnoutAssessmentUpdateManyWithWhereWithoutUserInput | BurnoutAssessmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BurnoutAssessmentScalarWhereInput | BurnoutAssessmentScalarWhereInput[]
  }

  export type ExerciseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExerciseCreateWithoutUserInput, ExerciseUncheckedCreateWithoutUserInput> | ExerciseCreateWithoutUserInput[] | ExerciseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutUserInput | ExerciseCreateOrConnectWithoutUserInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutUserInput | ExerciseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExerciseCreateManyUserInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutUserInput | ExerciseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutUserInput | ExerciseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutUserInput | CourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutUserInput | CourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutUserInput | CourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type StressRatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<StressRatingCreateWithoutUserInput, StressRatingUncheckedCreateWithoutUserInput> | StressRatingCreateWithoutUserInput[] | StressRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StressRatingCreateOrConnectWithoutUserInput | StressRatingCreateOrConnectWithoutUserInput[]
    upsert?: StressRatingUpsertWithWhereUniqueWithoutUserInput | StressRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StressRatingCreateManyUserInputEnvelope
    set?: StressRatingWhereUniqueInput | StressRatingWhereUniqueInput[]
    disconnect?: StressRatingWhereUniqueInput | StressRatingWhereUniqueInput[]
    delete?: StressRatingWhereUniqueInput | StressRatingWhereUniqueInput[]
    connect?: StressRatingWhereUniqueInput | StressRatingWhereUniqueInput[]
    update?: StressRatingUpdateWithWhereUniqueWithoutUserInput | StressRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StressRatingUpdateManyWithWhereWithoutUserInput | StressRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StressRatingScalarWhereInput | StressRatingScalarWhereInput[]
  }

  export type JournalEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    upsert?: JournalEntryUpsertWithWhereUniqueWithoutUserInput | JournalEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    set?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    disconnect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    delete?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    update?: JournalEntryUpdateWithWhereUniqueWithoutUserInput | JournalEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JournalEntryUpdateManyWithWhereWithoutUserInput | JournalEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
  }

  export type RecommendedArticleUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendedArticleCreateWithoutUserInput, RecommendedArticleUncheckedCreateWithoutUserInput> | RecommendedArticleCreateWithoutUserInput[] | RecommendedArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendedArticleCreateOrConnectWithoutUserInput | RecommendedArticleCreateOrConnectWithoutUserInput[]
    upsert?: RecommendedArticleUpsertWithWhereUniqueWithoutUserInput | RecommendedArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendedArticleCreateManyUserInputEnvelope
    set?: RecommendedArticleWhereUniqueInput | RecommendedArticleWhereUniqueInput[]
    disconnect?: RecommendedArticleWhereUniqueInput | RecommendedArticleWhereUniqueInput[]
    delete?: RecommendedArticleWhereUniqueInput | RecommendedArticleWhereUniqueInput[]
    connect?: RecommendedArticleWhereUniqueInput | RecommendedArticleWhereUniqueInput[]
    update?: RecommendedArticleUpdateWithWhereUniqueWithoutUserInput | RecommendedArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendedArticleUpdateManyWithWhereWithoutUserInput | RecommendedArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendedArticleScalarWhereInput | RecommendedArticleScalarWhereInput[]
  }

  export type BurnoutAssessmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BurnoutAssessmentCreateWithoutUserInput, BurnoutAssessmentUncheckedCreateWithoutUserInput> | BurnoutAssessmentCreateWithoutUserInput[] | BurnoutAssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BurnoutAssessmentCreateOrConnectWithoutUserInput | BurnoutAssessmentCreateOrConnectWithoutUserInput[]
    upsert?: BurnoutAssessmentUpsertWithWhereUniqueWithoutUserInput | BurnoutAssessmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BurnoutAssessmentCreateManyUserInputEnvelope
    set?: BurnoutAssessmentWhereUniqueInput | BurnoutAssessmentWhereUniqueInput[]
    disconnect?: BurnoutAssessmentWhereUniqueInput | BurnoutAssessmentWhereUniqueInput[]
    delete?: BurnoutAssessmentWhereUniqueInput | BurnoutAssessmentWhereUniqueInput[]
    connect?: BurnoutAssessmentWhereUniqueInput | BurnoutAssessmentWhereUniqueInput[]
    update?: BurnoutAssessmentUpdateWithWhereUniqueWithoutUserInput | BurnoutAssessmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BurnoutAssessmentUpdateManyWithWhereWithoutUserInput | BurnoutAssessmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BurnoutAssessmentScalarWhereInput | BurnoutAssessmentScalarWhereInput[]
  }

  export type ExerciseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExerciseCreateWithoutUserInput, ExerciseUncheckedCreateWithoutUserInput> | ExerciseCreateWithoutUserInput[] | ExerciseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutUserInput | ExerciseCreateOrConnectWithoutUserInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutUserInput | ExerciseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExerciseCreateManyUserInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutUserInput | ExerciseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutUserInput | ExerciseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutUserInput | CourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutUserInput | CourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutUserInput | CourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type StressRatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StressRatingCreateWithoutUserInput, StressRatingUncheckedCreateWithoutUserInput> | StressRatingCreateWithoutUserInput[] | StressRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StressRatingCreateOrConnectWithoutUserInput | StressRatingCreateOrConnectWithoutUserInput[]
    upsert?: StressRatingUpsertWithWhereUniqueWithoutUserInput | StressRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StressRatingCreateManyUserInputEnvelope
    set?: StressRatingWhereUniqueInput | StressRatingWhereUniqueInput[]
    disconnect?: StressRatingWhereUniqueInput | StressRatingWhereUniqueInput[]
    delete?: StressRatingWhereUniqueInput | StressRatingWhereUniqueInput[]
    connect?: StressRatingWhereUniqueInput | StressRatingWhereUniqueInput[]
    update?: StressRatingUpdateWithWhereUniqueWithoutUserInput | StressRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StressRatingUpdateManyWithWhereWithoutUserInput | StressRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StressRatingScalarWhereInput | StressRatingScalarWhereInput[]
  }

  export type JournalEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    upsert?: JournalEntryUpsertWithWhereUniqueWithoutUserInput | JournalEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    set?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    disconnect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    delete?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    update?: JournalEntryUpdateWithWhereUniqueWithoutUserInput | JournalEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JournalEntryUpdateManyWithWhereWithoutUserInput | JournalEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
  }

  export type RecommendedArticleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendedArticleCreateWithoutUserInput, RecommendedArticleUncheckedCreateWithoutUserInput> | RecommendedArticleCreateWithoutUserInput[] | RecommendedArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendedArticleCreateOrConnectWithoutUserInput | RecommendedArticleCreateOrConnectWithoutUserInput[]
    upsert?: RecommendedArticleUpsertWithWhereUniqueWithoutUserInput | RecommendedArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendedArticleCreateManyUserInputEnvelope
    set?: RecommendedArticleWhereUniqueInput | RecommendedArticleWhereUniqueInput[]
    disconnect?: RecommendedArticleWhereUniqueInput | RecommendedArticleWhereUniqueInput[]
    delete?: RecommendedArticleWhereUniqueInput | RecommendedArticleWhereUniqueInput[]
    connect?: RecommendedArticleWhereUniqueInput | RecommendedArticleWhereUniqueInput[]
    update?: RecommendedArticleUpdateWithWhereUniqueWithoutUserInput | RecommendedArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendedArticleUpdateManyWithWhereWithoutUserInput | RecommendedArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendedArticleScalarWhereInput | RecommendedArticleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBurnoutAssessmentsInput = {
    create?: XOR<UserCreateWithoutBurnoutAssessmentsInput, UserUncheckedCreateWithoutBurnoutAssessmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBurnoutAssessmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBurnoutAssessmentsNestedInput = {
    create?: XOR<UserCreateWithoutBurnoutAssessmentsInput, UserUncheckedCreateWithoutBurnoutAssessmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBurnoutAssessmentsInput
    upsert?: UserUpsertWithoutBurnoutAssessmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBurnoutAssessmentsInput, UserUpdateWithoutBurnoutAssessmentsInput>, UserUncheckedUpdateWithoutBurnoutAssessmentsInput>
  }

  export type ExerciseInputCreateNestedManyWithoutExerciseInput = {
    create?: XOR<ExerciseInputCreateWithoutExerciseInput, ExerciseInputUncheckedCreateWithoutExerciseInput> | ExerciseInputCreateWithoutExerciseInput[] | ExerciseInputUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseInputCreateOrConnectWithoutExerciseInput | ExerciseInputCreateOrConnectWithoutExerciseInput[]
    createMany?: ExerciseInputCreateManyExerciseInputEnvelope
    connect?: ExerciseInputWhereUniqueInput | ExerciseInputWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutExercisesInput = {
    create?: XOR<UserCreateWithoutExercisesInput, UserUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExercisesInput
    connect?: UserWhereUniqueInput
  }

  export type ExerciseInputUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<ExerciseInputCreateWithoutExerciseInput, ExerciseInputUncheckedCreateWithoutExerciseInput> | ExerciseInputCreateWithoutExerciseInput[] | ExerciseInputUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseInputCreateOrConnectWithoutExerciseInput | ExerciseInputCreateOrConnectWithoutExerciseInput[]
    createMany?: ExerciseInputCreateManyExerciseInputEnvelope
    connect?: ExerciseInputWhereUniqueInput | ExerciseInputWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExerciseInputUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<ExerciseInputCreateWithoutExerciseInput, ExerciseInputUncheckedCreateWithoutExerciseInput> | ExerciseInputCreateWithoutExerciseInput[] | ExerciseInputUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseInputCreateOrConnectWithoutExerciseInput | ExerciseInputCreateOrConnectWithoutExerciseInput[]
    upsert?: ExerciseInputUpsertWithWhereUniqueWithoutExerciseInput | ExerciseInputUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: ExerciseInputCreateManyExerciseInputEnvelope
    set?: ExerciseInputWhereUniqueInput | ExerciseInputWhereUniqueInput[]
    disconnect?: ExerciseInputWhereUniqueInput | ExerciseInputWhereUniqueInput[]
    delete?: ExerciseInputWhereUniqueInput | ExerciseInputWhereUniqueInput[]
    connect?: ExerciseInputWhereUniqueInput | ExerciseInputWhereUniqueInput[]
    update?: ExerciseInputUpdateWithWhereUniqueWithoutExerciseInput | ExerciseInputUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: ExerciseInputUpdateManyWithWhereWithoutExerciseInput | ExerciseInputUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: ExerciseInputScalarWhereInput | ExerciseInputScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<UserCreateWithoutExercisesInput, UserUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExercisesInput
    upsert?: UserUpsertWithoutExercisesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExercisesInput, UserUpdateWithoutExercisesInput>, UserUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseInputUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<ExerciseInputCreateWithoutExerciseInput, ExerciseInputUncheckedCreateWithoutExerciseInput> | ExerciseInputCreateWithoutExerciseInput[] | ExerciseInputUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseInputCreateOrConnectWithoutExerciseInput | ExerciseInputCreateOrConnectWithoutExerciseInput[]
    upsert?: ExerciseInputUpsertWithWhereUniqueWithoutExerciseInput | ExerciseInputUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: ExerciseInputCreateManyExerciseInputEnvelope
    set?: ExerciseInputWhereUniqueInput | ExerciseInputWhereUniqueInput[]
    disconnect?: ExerciseInputWhereUniqueInput | ExerciseInputWhereUniqueInput[]
    delete?: ExerciseInputWhereUniqueInput | ExerciseInputWhereUniqueInput[]
    connect?: ExerciseInputWhereUniqueInput | ExerciseInputWhereUniqueInput[]
    update?: ExerciseInputUpdateWithWhereUniqueWithoutExerciseInput | ExerciseInputUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: ExerciseInputUpdateManyWithWhereWithoutExerciseInput | ExerciseInputUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: ExerciseInputScalarWhereInput | ExerciseInputScalarWhereInput[]
  }

  export type ExerciseCreateNestedOneWithoutEncryptedUserInputsInput = {
    create?: XOR<ExerciseCreateWithoutEncryptedUserInputsInput, ExerciseUncheckedCreateWithoutEncryptedUserInputsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutEncryptedUserInputsInput
    connect?: ExerciseWhereUniqueInput
  }

  export type ExerciseUpdateOneRequiredWithoutEncryptedUserInputsNestedInput = {
    create?: XOR<ExerciseCreateWithoutEncryptedUserInputsInput, ExerciseUncheckedCreateWithoutEncryptedUserInputsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutEncryptedUserInputsInput
    upsert?: ExerciseUpsertWithoutEncryptedUserInputsInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutEncryptedUserInputsInput, ExerciseUpdateWithoutEncryptedUserInputsInput>, ExerciseUncheckedUpdateWithoutEncryptedUserInputsInput>
  }

  export type UserCreateNestedOneWithoutCoursesInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type CourseModuleCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseModuleCreateWithoutCourseInput, CourseModuleUncheckedCreateWithoutCourseInput> | CourseModuleCreateWithoutCourseInput[] | CourseModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseModuleCreateOrConnectWithoutCourseInput | CourseModuleCreateOrConnectWithoutCourseInput[]
    createMany?: CourseModuleCreateManyCourseInputEnvelope
    connect?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
  }

  export type CourseResourceStatusCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseResourceStatusCreateWithoutCourseInput, CourseResourceStatusUncheckedCreateWithoutCourseInput> | CourseResourceStatusCreateWithoutCourseInput[] | CourseResourceStatusUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseResourceStatusCreateOrConnectWithoutCourseInput | CourseResourceStatusCreateOrConnectWithoutCourseInput[]
    createMany?: CourseResourceStatusCreateManyCourseInputEnvelope
    connect?: CourseResourceStatusWhereUniqueInput | CourseResourceStatusWhereUniqueInput[]
  }

  export type CourseModuleUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseModuleCreateWithoutCourseInput, CourseModuleUncheckedCreateWithoutCourseInput> | CourseModuleCreateWithoutCourseInput[] | CourseModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseModuleCreateOrConnectWithoutCourseInput | CourseModuleCreateOrConnectWithoutCourseInput[]
    createMany?: CourseModuleCreateManyCourseInputEnvelope
    connect?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
  }

  export type CourseResourceStatusUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseResourceStatusCreateWithoutCourseInput, CourseResourceStatusUncheckedCreateWithoutCourseInput> | CourseResourceStatusCreateWithoutCourseInput[] | CourseResourceStatusUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseResourceStatusCreateOrConnectWithoutCourseInput | CourseResourceStatusCreateOrConnectWithoutCourseInput[]
    createMany?: CourseResourceStatusCreateManyCourseInputEnvelope
    connect?: CourseResourceStatusWhereUniqueInput | CourseResourceStatusWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    upsert?: UserUpsertWithoutCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoursesInput, UserUpdateWithoutCoursesInput>, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseModuleUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseModuleCreateWithoutCourseInput, CourseModuleUncheckedCreateWithoutCourseInput> | CourseModuleCreateWithoutCourseInput[] | CourseModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseModuleCreateOrConnectWithoutCourseInput | CourseModuleCreateOrConnectWithoutCourseInput[]
    upsert?: CourseModuleUpsertWithWhereUniqueWithoutCourseInput | CourseModuleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseModuleCreateManyCourseInputEnvelope
    set?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    disconnect?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    delete?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    connect?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    update?: CourseModuleUpdateWithWhereUniqueWithoutCourseInput | CourseModuleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseModuleUpdateManyWithWhereWithoutCourseInput | CourseModuleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseModuleScalarWhereInput | CourseModuleScalarWhereInput[]
  }

  export type CourseResourceStatusUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseResourceStatusCreateWithoutCourseInput, CourseResourceStatusUncheckedCreateWithoutCourseInput> | CourseResourceStatusCreateWithoutCourseInput[] | CourseResourceStatusUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseResourceStatusCreateOrConnectWithoutCourseInput | CourseResourceStatusCreateOrConnectWithoutCourseInput[]
    upsert?: CourseResourceStatusUpsertWithWhereUniqueWithoutCourseInput | CourseResourceStatusUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseResourceStatusCreateManyCourseInputEnvelope
    set?: CourseResourceStatusWhereUniqueInput | CourseResourceStatusWhereUniqueInput[]
    disconnect?: CourseResourceStatusWhereUniqueInput | CourseResourceStatusWhereUniqueInput[]
    delete?: CourseResourceStatusWhereUniqueInput | CourseResourceStatusWhereUniqueInput[]
    connect?: CourseResourceStatusWhereUniqueInput | CourseResourceStatusWhereUniqueInput[]
    update?: CourseResourceStatusUpdateWithWhereUniqueWithoutCourseInput | CourseResourceStatusUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseResourceStatusUpdateManyWithWhereWithoutCourseInput | CourseResourceStatusUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseResourceStatusScalarWhereInput | CourseResourceStatusScalarWhereInput[]
  }

  export type CourseModuleUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseModuleCreateWithoutCourseInput, CourseModuleUncheckedCreateWithoutCourseInput> | CourseModuleCreateWithoutCourseInput[] | CourseModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseModuleCreateOrConnectWithoutCourseInput | CourseModuleCreateOrConnectWithoutCourseInput[]
    upsert?: CourseModuleUpsertWithWhereUniqueWithoutCourseInput | CourseModuleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseModuleCreateManyCourseInputEnvelope
    set?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    disconnect?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    delete?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    connect?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    update?: CourseModuleUpdateWithWhereUniqueWithoutCourseInput | CourseModuleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseModuleUpdateManyWithWhereWithoutCourseInput | CourseModuleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseModuleScalarWhereInput | CourseModuleScalarWhereInput[]
  }

  export type CourseResourceStatusUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseResourceStatusCreateWithoutCourseInput, CourseResourceStatusUncheckedCreateWithoutCourseInput> | CourseResourceStatusCreateWithoutCourseInput[] | CourseResourceStatusUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseResourceStatusCreateOrConnectWithoutCourseInput | CourseResourceStatusCreateOrConnectWithoutCourseInput[]
    upsert?: CourseResourceStatusUpsertWithWhereUniqueWithoutCourseInput | CourseResourceStatusUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseResourceStatusCreateManyCourseInputEnvelope
    set?: CourseResourceStatusWhereUniqueInput | CourseResourceStatusWhereUniqueInput[]
    disconnect?: CourseResourceStatusWhereUniqueInput | CourseResourceStatusWhereUniqueInput[]
    delete?: CourseResourceStatusWhereUniqueInput | CourseResourceStatusWhereUniqueInput[]
    connect?: CourseResourceStatusWhereUniqueInput | CourseResourceStatusWhereUniqueInput[]
    update?: CourseResourceStatusUpdateWithWhereUniqueWithoutCourseInput | CourseResourceStatusUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseResourceStatusUpdateManyWithWhereWithoutCourseInput | CourseResourceStatusUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseResourceStatusScalarWhereInput | CourseResourceStatusScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutModulesInput = {
    create?: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutModulesInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseModuleInputCreateNestedManyWithoutModuleInput = {
    create?: XOR<CourseModuleInputCreateWithoutModuleInput, CourseModuleInputUncheckedCreateWithoutModuleInput> | CourseModuleInputCreateWithoutModuleInput[] | CourseModuleInputUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: CourseModuleInputCreateOrConnectWithoutModuleInput | CourseModuleInputCreateOrConnectWithoutModuleInput[]
    createMany?: CourseModuleInputCreateManyModuleInputEnvelope
    connect?: CourseModuleInputWhereUniqueInput | CourseModuleInputWhereUniqueInput[]
  }

  export type CourseModuleInputUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<CourseModuleInputCreateWithoutModuleInput, CourseModuleInputUncheckedCreateWithoutModuleInput> | CourseModuleInputCreateWithoutModuleInput[] | CourseModuleInputUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: CourseModuleInputCreateOrConnectWithoutModuleInput | CourseModuleInputCreateOrConnectWithoutModuleInput[]
    createMany?: CourseModuleInputCreateManyModuleInputEnvelope
    connect?: CourseModuleInputWhereUniqueInput | CourseModuleInputWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutModulesInput
    upsert?: CourseUpsertWithoutModulesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutModulesInput, CourseUpdateWithoutModulesInput>, CourseUncheckedUpdateWithoutModulesInput>
  }

  export type CourseModuleInputUpdateManyWithoutModuleNestedInput = {
    create?: XOR<CourseModuleInputCreateWithoutModuleInput, CourseModuleInputUncheckedCreateWithoutModuleInput> | CourseModuleInputCreateWithoutModuleInput[] | CourseModuleInputUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: CourseModuleInputCreateOrConnectWithoutModuleInput | CourseModuleInputCreateOrConnectWithoutModuleInput[]
    upsert?: CourseModuleInputUpsertWithWhereUniqueWithoutModuleInput | CourseModuleInputUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: CourseModuleInputCreateManyModuleInputEnvelope
    set?: CourseModuleInputWhereUniqueInput | CourseModuleInputWhereUniqueInput[]
    disconnect?: CourseModuleInputWhereUniqueInput | CourseModuleInputWhereUniqueInput[]
    delete?: CourseModuleInputWhereUniqueInput | CourseModuleInputWhereUniqueInput[]
    connect?: CourseModuleInputWhereUniqueInput | CourseModuleInputWhereUniqueInput[]
    update?: CourseModuleInputUpdateWithWhereUniqueWithoutModuleInput | CourseModuleInputUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: CourseModuleInputUpdateManyWithWhereWithoutModuleInput | CourseModuleInputUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: CourseModuleInputScalarWhereInput | CourseModuleInputScalarWhereInput[]
  }

  export type CourseModuleInputUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<CourseModuleInputCreateWithoutModuleInput, CourseModuleInputUncheckedCreateWithoutModuleInput> | CourseModuleInputCreateWithoutModuleInput[] | CourseModuleInputUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: CourseModuleInputCreateOrConnectWithoutModuleInput | CourseModuleInputCreateOrConnectWithoutModuleInput[]
    upsert?: CourseModuleInputUpsertWithWhereUniqueWithoutModuleInput | CourseModuleInputUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: CourseModuleInputCreateManyModuleInputEnvelope
    set?: CourseModuleInputWhereUniqueInput | CourseModuleInputWhereUniqueInput[]
    disconnect?: CourseModuleInputWhereUniqueInput | CourseModuleInputWhereUniqueInput[]
    delete?: CourseModuleInputWhereUniqueInput | CourseModuleInputWhereUniqueInput[]
    connect?: CourseModuleInputWhereUniqueInput | CourseModuleInputWhereUniqueInput[]
    update?: CourseModuleInputUpdateWithWhereUniqueWithoutModuleInput | CourseModuleInputUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: CourseModuleInputUpdateManyWithWhereWithoutModuleInput | CourseModuleInputUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: CourseModuleInputScalarWhereInput | CourseModuleInputScalarWhereInput[]
  }

  export type CourseModuleCreateNestedOneWithoutEncryptedInputsInput = {
    create?: XOR<CourseModuleCreateWithoutEncryptedInputsInput, CourseModuleUncheckedCreateWithoutEncryptedInputsInput>
    connectOrCreate?: CourseModuleCreateOrConnectWithoutEncryptedInputsInput
    connect?: CourseModuleWhereUniqueInput
  }

  export type CourseModuleUpdateOneRequiredWithoutEncryptedInputsNestedInput = {
    create?: XOR<CourseModuleCreateWithoutEncryptedInputsInput, CourseModuleUncheckedCreateWithoutEncryptedInputsInput>
    connectOrCreate?: CourseModuleCreateOrConnectWithoutEncryptedInputsInput
    upsert?: CourseModuleUpsertWithoutEncryptedInputsInput
    connect?: CourseModuleWhereUniqueInput
    update?: XOR<XOR<CourseModuleUpdateToOneWithWhereWithoutEncryptedInputsInput, CourseModuleUpdateWithoutEncryptedInputsInput>, CourseModuleUncheckedUpdateWithoutEncryptedInputsInput>
  }

  export type CourseCreateNestedOneWithoutResourcesStatusInput = {
    create?: XOR<CourseCreateWithoutResourcesStatusInput, CourseUncheckedCreateWithoutResourcesStatusInput>
    connectOrCreate?: CourseCreateOrConnectWithoutResourcesStatusInput
    connect?: CourseWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CourseUpdateOneRequiredWithoutResourcesStatusNestedInput = {
    create?: XOR<CourseCreateWithoutResourcesStatusInput, CourseUncheckedCreateWithoutResourcesStatusInput>
    connectOrCreate?: CourseCreateOrConnectWithoutResourcesStatusInput
    upsert?: CourseUpsertWithoutResourcesStatusInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutResourcesStatusInput, CourseUpdateWithoutResourcesStatusInput>, CourseUncheckedUpdateWithoutResourcesStatusInput>
  }

  export type UserCreateNestedOneWithoutRecommendedArticlesInput = {
    create?: XOR<UserCreateWithoutRecommendedArticlesInput, UserUncheckedCreateWithoutRecommendedArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecommendedArticlesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecommendedArticlesNestedInput = {
    create?: XOR<UserCreateWithoutRecommendedArticlesInput, UserUncheckedCreateWithoutRecommendedArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecommendedArticlesInput
    upsert?: UserUpsertWithoutRecommendedArticlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecommendedArticlesInput, UserUpdateWithoutRecommendedArticlesInput>, UserUncheckedUpdateWithoutRecommendedArticlesInput>
  }

  export type UserCreateNestedOneWithoutStressRatingsInput = {
    create?: XOR<UserCreateWithoutStressRatingsInput, UserUncheckedCreateWithoutStressRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStressRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStressRatingsNestedInput = {
    create?: XOR<UserCreateWithoutStressRatingsInput, UserUncheckedCreateWithoutStressRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStressRatingsInput
    upsert?: UserUpsertWithoutStressRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStressRatingsInput, UserUpdateWithoutStressRatingsInput>, UserUncheckedUpdateWithoutStressRatingsInput>
  }

  export type UserCreateNestedOneWithoutJournalEntriesInput = {
    create?: XOR<UserCreateWithoutJournalEntriesInput, UserUncheckedCreateWithoutJournalEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutJournalEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type JournalEntryInputCreateNestedManyWithoutJournalEntryInput = {
    create?: XOR<JournalEntryInputCreateWithoutJournalEntryInput, JournalEntryInputUncheckedCreateWithoutJournalEntryInput> | JournalEntryInputCreateWithoutJournalEntryInput[] | JournalEntryInputUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: JournalEntryInputCreateOrConnectWithoutJournalEntryInput | JournalEntryInputCreateOrConnectWithoutJournalEntryInput[]
    createMany?: JournalEntryInputCreateManyJournalEntryInputEnvelope
    connect?: JournalEntryInputWhereUniqueInput | JournalEntryInputWhereUniqueInput[]
  }

  export type JournalEntryInputUncheckedCreateNestedManyWithoutJournalEntryInput = {
    create?: XOR<JournalEntryInputCreateWithoutJournalEntryInput, JournalEntryInputUncheckedCreateWithoutJournalEntryInput> | JournalEntryInputCreateWithoutJournalEntryInput[] | JournalEntryInputUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: JournalEntryInputCreateOrConnectWithoutJournalEntryInput | JournalEntryInputCreateOrConnectWithoutJournalEntryInput[]
    createMany?: JournalEntryInputCreateManyJournalEntryInputEnvelope
    connect?: JournalEntryInputWhereUniqueInput | JournalEntryInputWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutJournalEntriesNestedInput = {
    create?: XOR<UserCreateWithoutJournalEntriesInput, UserUncheckedCreateWithoutJournalEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutJournalEntriesInput
    upsert?: UserUpsertWithoutJournalEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJournalEntriesInput, UserUpdateWithoutJournalEntriesInput>, UserUncheckedUpdateWithoutJournalEntriesInput>
  }

  export type JournalEntryInputUpdateManyWithoutJournalEntryNestedInput = {
    create?: XOR<JournalEntryInputCreateWithoutJournalEntryInput, JournalEntryInputUncheckedCreateWithoutJournalEntryInput> | JournalEntryInputCreateWithoutJournalEntryInput[] | JournalEntryInputUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: JournalEntryInputCreateOrConnectWithoutJournalEntryInput | JournalEntryInputCreateOrConnectWithoutJournalEntryInput[]
    upsert?: JournalEntryInputUpsertWithWhereUniqueWithoutJournalEntryInput | JournalEntryInputUpsertWithWhereUniqueWithoutJournalEntryInput[]
    createMany?: JournalEntryInputCreateManyJournalEntryInputEnvelope
    set?: JournalEntryInputWhereUniqueInput | JournalEntryInputWhereUniqueInput[]
    disconnect?: JournalEntryInputWhereUniqueInput | JournalEntryInputWhereUniqueInput[]
    delete?: JournalEntryInputWhereUniqueInput | JournalEntryInputWhereUniqueInput[]
    connect?: JournalEntryInputWhereUniqueInput | JournalEntryInputWhereUniqueInput[]
    update?: JournalEntryInputUpdateWithWhereUniqueWithoutJournalEntryInput | JournalEntryInputUpdateWithWhereUniqueWithoutJournalEntryInput[]
    updateMany?: JournalEntryInputUpdateManyWithWhereWithoutJournalEntryInput | JournalEntryInputUpdateManyWithWhereWithoutJournalEntryInput[]
    deleteMany?: JournalEntryInputScalarWhereInput | JournalEntryInputScalarWhereInput[]
  }

  export type JournalEntryInputUncheckedUpdateManyWithoutJournalEntryNestedInput = {
    create?: XOR<JournalEntryInputCreateWithoutJournalEntryInput, JournalEntryInputUncheckedCreateWithoutJournalEntryInput> | JournalEntryInputCreateWithoutJournalEntryInput[] | JournalEntryInputUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: JournalEntryInputCreateOrConnectWithoutJournalEntryInput | JournalEntryInputCreateOrConnectWithoutJournalEntryInput[]
    upsert?: JournalEntryInputUpsertWithWhereUniqueWithoutJournalEntryInput | JournalEntryInputUpsertWithWhereUniqueWithoutJournalEntryInput[]
    createMany?: JournalEntryInputCreateManyJournalEntryInputEnvelope
    set?: JournalEntryInputWhereUniqueInput | JournalEntryInputWhereUniqueInput[]
    disconnect?: JournalEntryInputWhereUniqueInput | JournalEntryInputWhereUniqueInput[]
    delete?: JournalEntryInputWhereUniqueInput | JournalEntryInputWhereUniqueInput[]
    connect?: JournalEntryInputWhereUniqueInput | JournalEntryInputWhereUniqueInput[]
    update?: JournalEntryInputUpdateWithWhereUniqueWithoutJournalEntryInput | JournalEntryInputUpdateWithWhereUniqueWithoutJournalEntryInput[]
    updateMany?: JournalEntryInputUpdateManyWithWhereWithoutJournalEntryInput | JournalEntryInputUpdateManyWithWhereWithoutJournalEntryInput[]
    deleteMany?: JournalEntryInputScalarWhereInput | JournalEntryInputScalarWhereInput[]
  }

  export type JournalEntryCreateNestedOneWithoutInputsInput = {
    create?: XOR<JournalEntryCreateWithoutInputsInput, JournalEntryUncheckedCreateWithoutInputsInput>
    connectOrCreate?: JournalEntryCreateOrConnectWithoutInputsInput
    connect?: JournalEntryWhereUniqueInput
  }

  export type JournalEntryUpdateOneRequiredWithoutInputsNestedInput = {
    create?: XOR<JournalEntryCreateWithoutInputsInput, JournalEntryUncheckedCreateWithoutInputsInput>
    connectOrCreate?: JournalEntryCreateOrConnectWithoutInputsInput
    upsert?: JournalEntryUpsertWithoutInputsInput
    connect?: JournalEntryWhereUniqueInput
    update?: XOR<XOR<JournalEntryUpdateToOneWithWhereWithoutInputsInput, JournalEntryUpdateWithoutInputsInput>, JournalEntryUncheckedUpdateWithoutInputsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BurnoutAssessmentCreateWithoutUserInput = {
    id?: string
    assessmentKey: string
    createdAt?: Date | string
    categoryScores: JsonNullValueInput | InputJsonValue
  }

  export type BurnoutAssessmentUncheckedCreateWithoutUserInput = {
    id?: string
    assessmentKey: string
    createdAt?: Date | string
    categoryScores: JsonNullValueInput | InputJsonValue
  }

  export type BurnoutAssessmentCreateOrConnectWithoutUserInput = {
    where: BurnoutAssessmentWhereUniqueInput
    create: XOR<BurnoutAssessmentCreateWithoutUserInput, BurnoutAssessmentUncheckedCreateWithoutUserInput>
  }

  export type BurnoutAssessmentCreateManyUserInputEnvelope = {
    data: BurnoutAssessmentCreateManyUserInput | BurnoutAssessmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseCreateWithoutUserInput = {
    id?: string
    exerciseSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completedPrompts?: number
    completionPercentage?: number
    encryptedUserInputs?: ExerciseInputCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutUserInput = {
    id?: string
    exerciseSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completedPrompts?: number
    completionPercentage?: number
    encryptedUserInputs?: ExerciseInputUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutUserInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutUserInput, ExerciseUncheckedCreateWithoutUserInput>
  }

  export type ExerciseCreateManyUserInputEnvelope = {
    data: ExerciseCreateManyUserInput | ExerciseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutUserInput = {
    id?: string
    courseSlug: string
    courseName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: CourseModuleCreateNestedManyWithoutCourseInput
    resourcesStatus?: CourseResourceStatusCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutUserInput = {
    id?: string
    courseSlug: string
    courseName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: CourseModuleUncheckedCreateNestedManyWithoutCourseInput
    resourcesStatus?: CourseResourceStatusUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutUserInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput>
  }

  export type CourseCreateManyUserInputEnvelope = {
    data: CourseCreateManyUserInput | CourseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StressRatingCreateWithoutUserInput = {
    id?: string
    rating: number
    createdAt?: Date | string
  }

  export type StressRatingUncheckedCreateWithoutUserInput = {
    id?: string
    rating: number
    createdAt?: Date | string
  }

  export type StressRatingCreateOrConnectWithoutUserInput = {
    where: StressRatingWhereUniqueInput
    create: XOR<StressRatingCreateWithoutUserInput, StressRatingUncheckedCreateWithoutUserInput>
  }

  export type StressRatingCreateManyUserInputEnvelope = {
    data: StressRatingCreateManyUserInput | StressRatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JournalEntryCreateWithoutUserInput = {
    id?: string
    journalName: string
    dateKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputs?: JournalEntryInputCreateNestedManyWithoutJournalEntryInput
  }

  export type JournalEntryUncheckedCreateWithoutUserInput = {
    id?: string
    journalName: string
    dateKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputs?: JournalEntryInputUncheckedCreateNestedManyWithoutJournalEntryInput
  }

  export type JournalEntryCreateOrConnectWithoutUserInput = {
    where: JournalEntryWhereUniqueInput
    create: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput>
  }

  export type JournalEntryCreateManyUserInputEnvelope = {
    data: JournalEntryCreateManyUserInput | JournalEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecommendedArticleCreateWithoutUserInput = {
    id?: string
    articleSlug: string
    createdAt?: Date | string
  }

  export type RecommendedArticleUncheckedCreateWithoutUserInput = {
    id?: string
    articleSlug: string
    createdAt?: Date | string
  }

  export type RecommendedArticleCreateOrConnectWithoutUserInput = {
    where: RecommendedArticleWhereUniqueInput
    create: XOR<RecommendedArticleCreateWithoutUserInput, RecommendedArticleUncheckedCreateWithoutUserInput>
  }

  export type RecommendedArticleCreateManyUserInputEnvelope = {
    data: RecommendedArticleCreateManyUserInput | RecommendedArticleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BurnoutAssessmentUpsertWithWhereUniqueWithoutUserInput = {
    where: BurnoutAssessmentWhereUniqueInput
    update: XOR<BurnoutAssessmentUpdateWithoutUserInput, BurnoutAssessmentUncheckedUpdateWithoutUserInput>
    create: XOR<BurnoutAssessmentCreateWithoutUserInput, BurnoutAssessmentUncheckedCreateWithoutUserInput>
  }

  export type BurnoutAssessmentUpdateWithWhereUniqueWithoutUserInput = {
    where: BurnoutAssessmentWhereUniqueInput
    data: XOR<BurnoutAssessmentUpdateWithoutUserInput, BurnoutAssessmentUncheckedUpdateWithoutUserInput>
  }

  export type BurnoutAssessmentUpdateManyWithWhereWithoutUserInput = {
    where: BurnoutAssessmentScalarWhereInput
    data: XOR<BurnoutAssessmentUpdateManyMutationInput, BurnoutAssessmentUncheckedUpdateManyWithoutUserInput>
  }

  export type BurnoutAssessmentScalarWhereInput = {
    AND?: BurnoutAssessmentScalarWhereInput | BurnoutAssessmentScalarWhereInput[]
    OR?: BurnoutAssessmentScalarWhereInput[]
    NOT?: BurnoutAssessmentScalarWhereInput | BurnoutAssessmentScalarWhereInput[]
    id?: StringFilter<"BurnoutAssessment"> | string
    userId?: StringFilter<"BurnoutAssessment"> | string
    assessmentKey?: StringFilter<"BurnoutAssessment"> | string
    createdAt?: DateTimeFilter<"BurnoutAssessment"> | Date | string
    categoryScores?: JsonFilter<"BurnoutAssessment">
  }

  export type ExerciseUpsertWithWhereUniqueWithoutUserInput = {
    where: ExerciseWhereUniqueInput
    update: XOR<ExerciseUpdateWithoutUserInput, ExerciseUncheckedUpdateWithoutUserInput>
    create: XOR<ExerciseCreateWithoutUserInput, ExerciseUncheckedCreateWithoutUserInput>
  }

  export type ExerciseUpdateWithWhereUniqueWithoutUserInput = {
    where: ExerciseWhereUniqueInput
    data: XOR<ExerciseUpdateWithoutUserInput, ExerciseUncheckedUpdateWithoutUserInput>
  }

  export type ExerciseUpdateManyWithWhereWithoutUserInput = {
    where: ExerciseScalarWhereInput
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyWithoutUserInput>
  }

  export type ExerciseScalarWhereInput = {
    AND?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    OR?: ExerciseScalarWhereInput[]
    NOT?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    id?: StringFilter<"Exercise"> | string
    userId?: StringFilter<"Exercise"> | string
    exerciseSlug?: StringFilter<"Exercise"> | string
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    completedPrompts?: IntFilter<"Exercise"> | number
    completionPercentage?: FloatFilter<"Exercise"> | number
  }

  export type CourseUpsertWithWhereUniqueWithoutUserInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutUserInput, CourseUncheckedUpdateWithoutUserInput>
    create: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutUserInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutUserInput, CourseUncheckedUpdateWithoutUserInput>
  }

  export type CourseUpdateManyWithWhereWithoutUserInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutUserInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    userId?: StringFilter<"Course"> | string
    courseSlug?: StringFilter<"Course"> | string
    courseName?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type StressRatingUpsertWithWhereUniqueWithoutUserInput = {
    where: StressRatingWhereUniqueInput
    update: XOR<StressRatingUpdateWithoutUserInput, StressRatingUncheckedUpdateWithoutUserInput>
    create: XOR<StressRatingCreateWithoutUserInput, StressRatingUncheckedCreateWithoutUserInput>
  }

  export type StressRatingUpdateWithWhereUniqueWithoutUserInput = {
    where: StressRatingWhereUniqueInput
    data: XOR<StressRatingUpdateWithoutUserInput, StressRatingUncheckedUpdateWithoutUserInput>
  }

  export type StressRatingUpdateManyWithWhereWithoutUserInput = {
    where: StressRatingScalarWhereInput
    data: XOR<StressRatingUpdateManyMutationInput, StressRatingUncheckedUpdateManyWithoutUserInput>
  }

  export type StressRatingScalarWhereInput = {
    AND?: StressRatingScalarWhereInput | StressRatingScalarWhereInput[]
    OR?: StressRatingScalarWhereInput[]
    NOT?: StressRatingScalarWhereInput | StressRatingScalarWhereInput[]
    id?: StringFilter<"StressRating"> | string
    userId?: StringFilter<"StressRating"> | string
    rating?: IntFilter<"StressRating"> | number
    createdAt?: DateTimeFilter<"StressRating"> | Date | string
  }

  export type JournalEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: JournalEntryWhereUniqueInput
    update: XOR<JournalEntryUpdateWithoutUserInput, JournalEntryUncheckedUpdateWithoutUserInput>
    create: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput>
  }

  export type JournalEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: JournalEntryWhereUniqueInput
    data: XOR<JournalEntryUpdateWithoutUserInput, JournalEntryUncheckedUpdateWithoutUserInput>
  }

  export type JournalEntryUpdateManyWithWhereWithoutUserInput = {
    where: JournalEntryScalarWhereInput
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type JournalEntryScalarWhereInput = {
    AND?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
    OR?: JournalEntryScalarWhereInput[]
    NOT?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
    id?: StringFilter<"JournalEntry"> | string
    userId?: StringFilter<"JournalEntry"> | string
    journalName?: StringFilter<"JournalEntry"> | string
    dateKey?: StringFilter<"JournalEntry"> | string
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
  }

  export type RecommendedArticleUpsertWithWhereUniqueWithoutUserInput = {
    where: RecommendedArticleWhereUniqueInput
    update: XOR<RecommendedArticleUpdateWithoutUserInput, RecommendedArticleUncheckedUpdateWithoutUserInput>
    create: XOR<RecommendedArticleCreateWithoutUserInput, RecommendedArticleUncheckedCreateWithoutUserInput>
  }

  export type RecommendedArticleUpdateWithWhereUniqueWithoutUserInput = {
    where: RecommendedArticleWhereUniqueInput
    data: XOR<RecommendedArticleUpdateWithoutUserInput, RecommendedArticleUncheckedUpdateWithoutUserInput>
  }

  export type RecommendedArticleUpdateManyWithWhereWithoutUserInput = {
    where: RecommendedArticleScalarWhereInput
    data: XOR<RecommendedArticleUpdateManyMutationInput, RecommendedArticleUncheckedUpdateManyWithoutUserInput>
  }

  export type RecommendedArticleScalarWhereInput = {
    AND?: RecommendedArticleScalarWhereInput | RecommendedArticleScalarWhereInput[]
    OR?: RecommendedArticleScalarWhereInput[]
    NOT?: RecommendedArticleScalarWhereInput | RecommendedArticleScalarWhereInput[]
    id?: StringFilter<"RecommendedArticle"> | string
    userId?: StringFilter<"RecommendedArticle"> | string
    articleSlug?: StringFilter<"RecommendedArticle"> | string
    createdAt?: DateTimeFilter<"RecommendedArticle"> | Date | string
  }

  export type UserCreateWithoutBurnoutAssessmentsInput = {
    id?: string
    clerkId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: ExerciseCreateNestedManyWithoutUserInput
    courses?: CourseCreateNestedManyWithoutUserInput
    stressRatings?: StressRatingCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    recommendedArticles?: RecommendedArticleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBurnoutAssessmentsInput = {
    id?: string
    clerkId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: ExerciseUncheckedCreateNestedManyWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    stressRatings?: StressRatingUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    recommendedArticles?: RecommendedArticleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBurnoutAssessmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBurnoutAssessmentsInput, UserUncheckedCreateWithoutBurnoutAssessmentsInput>
  }

  export type UserUpsertWithoutBurnoutAssessmentsInput = {
    update: XOR<UserUpdateWithoutBurnoutAssessmentsInput, UserUncheckedUpdateWithoutBurnoutAssessmentsInput>
    create: XOR<UserCreateWithoutBurnoutAssessmentsInput, UserUncheckedCreateWithoutBurnoutAssessmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBurnoutAssessmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBurnoutAssessmentsInput, UserUncheckedUpdateWithoutBurnoutAssessmentsInput>
  }

  export type UserUpdateWithoutBurnoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseUpdateManyWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutUserNestedInput
    stressRatings?: StressRatingUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    recommendedArticles?: RecommendedArticleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBurnoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseUncheckedUpdateManyWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    stressRatings?: StressRatingUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    recommendedArticles?: RecommendedArticleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExerciseInputCreateWithoutExerciseInput = {
    id?: string
    inputKey: string
    encryptedData: string
    iv: string
  }

  export type ExerciseInputUncheckedCreateWithoutExerciseInput = {
    id?: string
    inputKey: string
    encryptedData: string
    iv: string
  }

  export type ExerciseInputCreateOrConnectWithoutExerciseInput = {
    where: ExerciseInputWhereUniqueInput
    create: XOR<ExerciseInputCreateWithoutExerciseInput, ExerciseInputUncheckedCreateWithoutExerciseInput>
  }

  export type ExerciseInputCreateManyExerciseInputEnvelope = {
    data: ExerciseInputCreateManyExerciseInput | ExerciseInputCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutExercisesInput = {
    id?: string
    clerkId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    burnoutAssessments?: BurnoutAssessmentCreateNestedManyWithoutUserInput
    courses?: CourseCreateNestedManyWithoutUserInput
    stressRatings?: StressRatingCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    recommendedArticles?: RecommendedArticleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExercisesInput = {
    id?: string
    clerkId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    burnoutAssessments?: BurnoutAssessmentUncheckedCreateNestedManyWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    stressRatings?: StressRatingUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    recommendedArticles?: RecommendedArticleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExercisesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExercisesInput, UserUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseInputUpsertWithWhereUniqueWithoutExerciseInput = {
    where: ExerciseInputWhereUniqueInput
    update: XOR<ExerciseInputUpdateWithoutExerciseInput, ExerciseInputUncheckedUpdateWithoutExerciseInput>
    create: XOR<ExerciseInputCreateWithoutExerciseInput, ExerciseInputUncheckedCreateWithoutExerciseInput>
  }

  export type ExerciseInputUpdateWithWhereUniqueWithoutExerciseInput = {
    where: ExerciseInputWhereUniqueInput
    data: XOR<ExerciseInputUpdateWithoutExerciseInput, ExerciseInputUncheckedUpdateWithoutExerciseInput>
  }

  export type ExerciseInputUpdateManyWithWhereWithoutExerciseInput = {
    where: ExerciseInputScalarWhereInput
    data: XOR<ExerciseInputUpdateManyMutationInput, ExerciseInputUncheckedUpdateManyWithoutExerciseInput>
  }

  export type ExerciseInputScalarWhereInput = {
    AND?: ExerciseInputScalarWhereInput | ExerciseInputScalarWhereInput[]
    OR?: ExerciseInputScalarWhereInput[]
    NOT?: ExerciseInputScalarWhereInput | ExerciseInputScalarWhereInput[]
    id?: StringFilter<"ExerciseInput"> | string
    exerciseId?: StringFilter<"ExerciseInput"> | string
    inputKey?: StringFilter<"ExerciseInput"> | string
    encryptedData?: StringFilter<"ExerciseInput"> | string
    iv?: StringFilter<"ExerciseInput"> | string
  }

  export type UserUpsertWithoutExercisesInput = {
    update: XOR<UserUpdateWithoutExercisesInput, UserUncheckedUpdateWithoutExercisesInput>
    create: XOR<UserCreateWithoutExercisesInput, UserUncheckedCreateWithoutExercisesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExercisesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExercisesInput, UserUncheckedUpdateWithoutExercisesInput>
  }

  export type UserUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    burnoutAssessments?: BurnoutAssessmentUpdateManyWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutUserNestedInput
    stressRatings?: StressRatingUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    recommendedArticles?: RecommendedArticleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    burnoutAssessments?: BurnoutAssessmentUncheckedUpdateManyWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    stressRatings?: StressRatingUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    recommendedArticles?: RecommendedArticleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExerciseCreateWithoutEncryptedUserInputsInput = {
    id?: string
    exerciseSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completedPrompts?: number
    completionPercentage?: number
    user: UserCreateNestedOneWithoutExercisesInput
  }

  export type ExerciseUncheckedCreateWithoutEncryptedUserInputsInput = {
    id?: string
    userId: string
    exerciseSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completedPrompts?: number
    completionPercentage?: number
  }

  export type ExerciseCreateOrConnectWithoutEncryptedUserInputsInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutEncryptedUserInputsInput, ExerciseUncheckedCreateWithoutEncryptedUserInputsInput>
  }

  export type ExerciseUpsertWithoutEncryptedUserInputsInput = {
    update: XOR<ExerciseUpdateWithoutEncryptedUserInputsInput, ExerciseUncheckedUpdateWithoutEncryptedUserInputsInput>
    create: XOR<ExerciseCreateWithoutEncryptedUserInputsInput, ExerciseUncheckedCreateWithoutEncryptedUserInputsInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutEncryptedUserInputsInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutEncryptedUserInputsInput, ExerciseUncheckedUpdateWithoutEncryptedUserInputsInput>
  }

  export type ExerciseUpdateWithoutEncryptedUserInputsInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedPrompts?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutEncryptedUserInputsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exerciseSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedPrompts?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutCoursesInput = {
    id?: string
    clerkId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    burnoutAssessments?: BurnoutAssessmentCreateNestedManyWithoutUserInput
    exercises?: ExerciseCreateNestedManyWithoutUserInput
    stressRatings?: StressRatingCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    recommendedArticles?: RecommendedArticleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoursesInput = {
    id?: string
    clerkId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    burnoutAssessments?: BurnoutAssessmentUncheckedCreateNestedManyWithoutUserInput
    exercises?: ExerciseUncheckedCreateNestedManyWithoutUserInput
    stressRatings?: StressRatingUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    recommendedArticles?: RecommendedArticleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
  }

  export type CourseModuleCreateWithoutCourseInput = {
    id?: string
    moduleSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    encryptedInputs?: CourseModuleInputCreateNestedManyWithoutModuleInput
  }

  export type CourseModuleUncheckedCreateWithoutCourseInput = {
    id?: string
    moduleSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    encryptedInputs?: CourseModuleInputUncheckedCreateNestedManyWithoutModuleInput
  }

  export type CourseModuleCreateOrConnectWithoutCourseInput = {
    where: CourseModuleWhereUniqueInput
    create: XOR<CourseModuleCreateWithoutCourseInput, CourseModuleUncheckedCreateWithoutCourseInput>
  }

  export type CourseModuleCreateManyCourseInputEnvelope = {
    data: CourseModuleCreateManyCourseInput | CourseModuleCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseResourceStatusCreateWithoutCourseInput = {
    id?: string
    resourceName: string
    completed?: boolean
    completedAt?: Date | string | null
  }

  export type CourseResourceStatusUncheckedCreateWithoutCourseInput = {
    id?: string
    resourceName: string
    completed?: boolean
    completedAt?: Date | string | null
  }

  export type CourseResourceStatusCreateOrConnectWithoutCourseInput = {
    where: CourseResourceStatusWhereUniqueInput
    create: XOR<CourseResourceStatusCreateWithoutCourseInput, CourseResourceStatusUncheckedCreateWithoutCourseInput>
  }

  export type CourseResourceStatusCreateManyCourseInputEnvelope = {
    data: CourseResourceStatusCreateManyCourseInput | CourseResourceStatusCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCoursesInput = {
    update: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type UserUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    burnoutAssessments?: BurnoutAssessmentUpdateManyWithoutUserNestedInput
    exercises?: ExerciseUpdateManyWithoutUserNestedInput
    stressRatings?: StressRatingUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    recommendedArticles?: RecommendedArticleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    burnoutAssessments?: BurnoutAssessmentUncheckedUpdateManyWithoutUserNestedInput
    exercises?: ExerciseUncheckedUpdateManyWithoutUserNestedInput
    stressRatings?: StressRatingUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    recommendedArticles?: RecommendedArticleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseModuleUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseModuleWhereUniqueInput
    update: XOR<CourseModuleUpdateWithoutCourseInput, CourseModuleUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseModuleCreateWithoutCourseInput, CourseModuleUncheckedCreateWithoutCourseInput>
  }

  export type CourseModuleUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseModuleWhereUniqueInput
    data: XOR<CourseModuleUpdateWithoutCourseInput, CourseModuleUncheckedUpdateWithoutCourseInput>
  }

  export type CourseModuleUpdateManyWithWhereWithoutCourseInput = {
    where: CourseModuleScalarWhereInput
    data: XOR<CourseModuleUpdateManyMutationInput, CourseModuleUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseModuleScalarWhereInput = {
    AND?: CourseModuleScalarWhereInput | CourseModuleScalarWhereInput[]
    OR?: CourseModuleScalarWhereInput[]
    NOT?: CourseModuleScalarWhereInput | CourseModuleScalarWhereInput[]
    id?: StringFilter<"CourseModule"> | string
    courseId?: StringFilter<"CourseModule"> | string
    moduleSlug?: StringFilter<"CourseModule"> | string
    createdAt?: DateTimeFilter<"CourseModule"> | Date | string
    updatedAt?: DateTimeFilter<"CourseModule"> | Date | string
  }

  export type CourseResourceStatusUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseResourceStatusWhereUniqueInput
    update: XOR<CourseResourceStatusUpdateWithoutCourseInput, CourseResourceStatusUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseResourceStatusCreateWithoutCourseInput, CourseResourceStatusUncheckedCreateWithoutCourseInput>
  }

  export type CourseResourceStatusUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseResourceStatusWhereUniqueInput
    data: XOR<CourseResourceStatusUpdateWithoutCourseInput, CourseResourceStatusUncheckedUpdateWithoutCourseInput>
  }

  export type CourseResourceStatusUpdateManyWithWhereWithoutCourseInput = {
    where: CourseResourceStatusScalarWhereInput
    data: XOR<CourseResourceStatusUpdateManyMutationInput, CourseResourceStatusUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseResourceStatusScalarWhereInput = {
    AND?: CourseResourceStatusScalarWhereInput | CourseResourceStatusScalarWhereInput[]
    OR?: CourseResourceStatusScalarWhereInput[]
    NOT?: CourseResourceStatusScalarWhereInput | CourseResourceStatusScalarWhereInput[]
    id?: StringFilter<"CourseResourceStatus"> | string
    courseId?: StringFilter<"CourseResourceStatus"> | string
    resourceName?: StringFilter<"CourseResourceStatus"> | string
    completed?: BoolFilter<"CourseResourceStatus"> | boolean
    completedAt?: DateTimeNullableFilter<"CourseResourceStatus"> | Date | string | null
  }

  export type CourseCreateWithoutModulesInput = {
    id?: string
    courseSlug: string
    courseName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoursesInput
    resourcesStatus?: CourseResourceStatusCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutModulesInput = {
    id?: string
    userId: string
    courseSlug: string
    courseName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resourcesStatus?: CourseResourceStatusUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutModulesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
  }

  export type CourseModuleInputCreateWithoutModuleInput = {
    id?: string
    inputId: string
    encryptedData: string
    iv: string
  }

  export type CourseModuleInputUncheckedCreateWithoutModuleInput = {
    id?: string
    inputId: string
    encryptedData: string
    iv: string
  }

  export type CourseModuleInputCreateOrConnectWithoutModuleInput = {
    where: CourseModuleInputWhereUniqueInput
    create: XOR<CourseModuleInputCreateWithoutModuleInput, CourseModuleInputUncheckedCreateWithoutModuleInput>
  }

  export type CourseModuleInputCreateManyModuleInputEnvelope = {
    data: CourseModuleInputCreateManyModuleInput | CourseModuleInputCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutModulesInput = {
    update: XOR<CourseUpdateWithoutModulesInput, CourseUncheckedUpdateWithoutModulesInput>
    create: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutModulesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutModulesInput, CourseUncheckedUpdateWithoutModulesInput>
  }

  export type CourseUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseSlug?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursesNestedInput
    resourcesStatus?: CourseResourceStatusUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseSlug?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resourcesStatus?: CourseResourceStatusUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseModuleInputUpsertWithWhereUniqueWithoutModuleInput = {
    where: CourseModuleInputWhereUniqueInput
    update: XOR<CourseModuleInputUpdateWithoutModuleInput, CourseModuleInputUncheckedUpdateWithoutModuleInput>
    create: XOR<CourseModuleInputCreateWithoutModuleInput, CourseModuleInputUncheckedCreateWithoutModuleInput>
  }

  export type CourseModuleInputUpdateWithWhereUniqueWithoutModuleInput = {
    where: CourseModuleInputWhereUniqueInput
    data: XOR<CourseModuleInputUpdateWithoutModuleInput, CourseModuleInputUncheckedUpdateWithoutModuleInput>
  }

  export type CourseModuleInputUpdateManyWithWhereWithoutModuleInput = {
    where: CourseModuleInputScalarWhereInput
    data: XOR<CourseModuleInputUpdateManyMutationInput, CourseModuleInputUncheckedUpdateManyWithoutModuleInput>
  }

  export type CourseModuleInputScalarWhereInput = {
    AND?: CourseModuleInputScalarWhereInput | CourseModuleInputScalarWhereInput[]
    OR?: CourseModuleInputScalarWhereInput[]
    NOT?: CourseModuleInputScalarWhereInput | CourseModuleInputScalarWhereInput[]
    id?: StringFilter<"CourseModuleInput"> | string
    moduleId?: StringFilter<"CourseModuleInput"> | string
    inputId?: StringFilter<"CourseModuleInput"> | string
    encryptedData?: StringFilter<"CourseModuleInput"> | string
    iv?: StringFilter<"CourseModuleInput"> | string
  }

  export type CourseModuleCreateWithoutEncryptedInputsInput = {
    id?: string
    moduleSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutModulesInput
  }

  export type CourseModuleUncheckedCreateWithoutEncryptedInputsInput = {
    id?: string
    courseId: string
    moduleSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseModuleCreateOrConnectWithoutEncryptedInputsInput = {
    where: CourseModuleWhereUniqueInput
    create: XOR<CourseModuleCreateWithoutEncryptedInputsInput, CourseModuleUncheckedCreateWithoutEncryptedInputsInput>
  }

  export type CourseModuleUpsertWithoutEncryptedInputsInput = {
    update: XOR<CourseModuleUpdateWithoutEncryptedInputsInput, CourseModuleUncheckedUpdateWithoutEncryptedInputsInput>
    create: XOR<CourseModuleCreateWithoutEncryptedInputsInput, CourseModuleUncheckedCreateWithoutEncryptedInputsInput>
    where?: CourseModuleWhereInput
  }

  export type CourseModuleUpdateToOneWithWhereWithoutEncryptedInputsInput = {
    where?: CourseModuleWhereInput
    data: XOR<CourseModuleUpdateWithoutEncryptedInputsInput, CourseModuleUncheckedUpdateWithoutEncryptedInputsInput>
  }

  export type CourseModuleUpdateWithoutEncryptedInputsInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutModulesNestedInput
  }

  export type CourseModuleUncheckedUpdateWithoutEncryptedInputsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    moduleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateWithoutResourcesStatusInput = {
    id?: string
    courseSlug: string
    courseName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoursesInput
    modules?: CourseModuleCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutResourcesStatusInput = {
    id?: string
    userId: string
    courseSlug: string
    courseName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: CourseModuleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutResourcesStatusInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutResourcesStatusInput, CourseUncheckedCreateWithoutResourcesStatusInput>
  }

  export type CourseUpsertWithoutResourcesStatusInput = {
    update: XOR<CourseUpdateWithoutResourcesStatusInput, CourseUncheckedUpdateWithoutResourcesStatusInput>
    create: XOR<CourseCreateWithoutResourcesStatusInput, CourseUncheckedCreateWithoutResourcesStatusInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutResourcesStatusInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutResourcesStatusInput, CourseUncheckedUpdateWithoutResourcesStatusInput>
  }

  export type CourseUpdateWithoutResourcesStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseSlug?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursesNestedInput
    modules?: CourseModuleUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutResourcesStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseSlug?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: CourseModuleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutRecommendedArticlesInput = {
    id?: string
    clerkId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    burnoutAssessments?: BurnoutAssessmentCreateNestedManyWithoutUserInput
    exercises?: ExerciseCreateNestedManyWithoutUserInput
    courses?: CourseCreateNestedManyWithoutUserInput
    stressRatings?: StressRatingCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecommendedArticlesInput = {
    id?: string
    clerkId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    burnoutAssessments?: BurnoutAssessmentUncheckedCreateNestedManyWithoutUserInput
    exercises?: ExerciseUncheckedCreateNestedManyWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    stressRatings?: StressRatingUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecommendedArticlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecommendedArticlesInput, UserUncheckedCreateWithoutRecommendedArticlesInput>
  }

  export type UserUpsertWithoutRecommendedArticlesInput = {
    update: XOR<UserUpdateWithoutRecommendedArticlesInput, UserUncheckedUpdateWithoutRecommendedArticlesInput>
    create: XOR<UserCreateWithoutRecommendedArticlesInput, UserUncheckedCreateWithoutRecommendedArticlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecommendedArticlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecommendedArticlesInput, UserUncheckedUpdateWithoutRecommendedArticlesInput>
  }

  export type UserUpdateWithoutRecommendedArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    burnoutAssessments?: BurnoutAssessmentUpdateManyWithoutUserNestedInput
    exercises?: ExerciseUpdateManyWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutUserNestedInput
    stressRatings?: StressRatingUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecommendedArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    burnoutAssessments?: BurnoutAssessmentUncheckedUpdateManyWithoutUserNestedInput
    exercises?: ExerciseUncheckedUpdateManyWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    stressRatings?: StressRatingUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStressRatingsInput = {
    id?: string
    clerkId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    burnoutAssessments?: BurnoutAssessmentCreateNestedManyWithoutUserInput
    exercises?: ExerciseCreateNestedManyWithoutUserInput
    courses?: CourseCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    recommendedArticles?: RecommendedArticleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStressRatingsInput = {
    id?: string
    clerkId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    burnoutAssessments?: BurnoutAssessmentUncheckedCreateNestedManyWithoutUserInput
    exercises?: ExerciseUncheckedCreateNestedManyWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    recommendedArticles?: RecommendedArticleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStressRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStressRatingsInput, UserUncheckedCreateWithoutStressRatingsInput>
  }

  export type UserUpsertWithoutStressRatingsInput = {
    update: XOR<UserUpdateWithoutStressRatingsInput, UserUncheckedUpdateWithoutStressRatingsInput>
    create: XOR<UserCreateWithoutStressRatingsInput, UserUncheckedCreateWithoutStressRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStressRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStressRatingsInput, UserUncheckedUpdateWithoutStressRatingsInput>
  }

  export type UserUpdateWithoutStressRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    burnoutAssessments?: BurnoutAssessmentUpdateManyWithoutUserNestedInput
    exercises?: ExerciseUpdateManyWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    recommendedArticles?: RecommendedArticleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStressRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    burnoutAssessments?: BurnoutAssessmentUncheckedUpdateManyWithoutUserNestedInput
    exercises?: ExerciseUncheckedUpdateManyWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    recommendedArticles?: RecommendedArticleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutJournalEntriesInput = {
    id?: string
    clerkId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    burnoutAssessments?: BurnoutAssessmentCreateNestedManyWithoutUserInput
    exercises?: ExerciseCreateNestedManyWithoutUserInput
    courses?: CourseCreateNestedManyWithoutUserInput
    stressRatings?: StressRatingCreateNestedManyWithoutUserInput
    recommendedArticles?: RecommendedArticleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJournalEntriesInput = {
    id?: string
    clerkId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    burnoutAssessments?: BurnoutAssessmentUncheckedCreateNestedManyWithoutUserInput
    exercises?: ExerciseUncheckedCreateNestedManyWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    stressRatings?: StressRatingUncheckedCreateNestedManyWithoutUserInput
    recommendedArticles?: RecommendedArticleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJournalEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJournalEntriesInput, UserUncheckedCreateWithoutJournalEntriesInput>
  }

  export type JournalEntryInputCreateWithoutJournalEntryInput = {
    id?: string
    inputKey: string
    encryptedData: string
    iv: string
  }

  export type JournalEntryInputUncheckedCreateWithoutJournalEntryInput = {
    id?: string
    inputKey: string
    encryptedData: string
    iv: string
  }

  export type JournalEntryInputCreateOrConnectWithoutJournalEntryInput = {
    where: JournalEntryInputWhereUniqueInput
    create: XOR<JournalEntryInputCreateWithoutJournalEntryInput, JournalEntryInputUncheckedCreateWithoutJournalEntryInput>
  }

  export type JournalEntryInputCreateManyJournalEntryInputEnvelope = {
    data: JournalEntryInputCreateManyJournalEntryInput | JournalEntryInputCreateManyJournalEntryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutJournalEntriesInput = {
    update: XOR<UserUpdateWithoutJournalEntriesInput, UserUncheckedUpdateWithoutJournalEntriesInput>
    create: XOR<UserCreateWithoutJournalEntriesInput, UserUncheckedCreateWithoutJournalEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJournalEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJournalEntriesInput, UserUncheckedUpdateWithoutJournalEntriesInput>
  }

  export type UserUpdateWithoutJournalEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    burnoutAssessments?: BurnoutAssessmentUpdateManyWithoutUserNestedInput
    exercises?: ExerciseUpdateManyWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutUserNestedInput
    stressRatings?: StressRatingUpdateManyWithoutUserNestedInput
    recommendedArticles?: RecommendedArticleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJournalEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    burnoutAssessments?: BurnoutAssessmentUncheckedUpdateManyWithoutUserNestedInput
    exercises?: ExerciseUncheckedUpdateManyWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    stressRatings?: StressRatingUncheckedUpdateManyWithoutUserNestedInput
    recommendedArticles?: RecommendedArticleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JournalEntryInputUpsertWithWhereUniqueWithoutJournalEntryInput = {
    where: JournalEntryInputWhereUniqueInput
    update: XOR<JournalEntryInputUpdateWithoutJournalEntryInput, JournalEntryInputUncheckedUpdateWithoutJournalEntryInput>
    create: XOR<JournalEntryInputCreateWithoutJournalEntryInput, JournalEntryInputUncheckedCreateWithoutJournalEntryInput>
  }

  export type JournalEntryInputUpdateWithWhereUniqueWithoutJournalEntryInput = {
    where: JournalEntryInputWhereUniqueInput
    data: XOR<JournalEntryInputUpdateWithoutJournalEntryInput, JournalEntryInputUncheckedUpdateWithoutJournalEntryInput>
  }

  export type JournalEntryInputUpdateManyWithWhereWithoutJournalEntryInput = {
    where: JournalEntryInputScalarWhereInput
    data: XOR<JournalEntryInputUpdateManyMutationInput, JournalEntryInputUncheckedUpdateManyWithoutJournalEntryInput>
  }

  export type JournalEntryInputScalarWhereInput = {
    AND?: JournalEntryInputScalarWhereInput | JournalEntryInputScalarWhereInput[]
    OR?: JournalEntryInputScalarWhereInput[]
    NOT?: JournalEntryInputScalarWhereInput | JournalEntryInputScalarWhereInput[]
    id?: StringFilter<"JournalEntryInput"> | string
    journalEntryId?: StringFilter<"JournalEntryInput"> | string
    inputKey?: StringFilter<"JournalEntryInput"> | string
    encryptedData?: StringFilter<"JournalEntryInput"> | string
    iv?: StringFilter<"JournalEntryInput"> | string
  }

  export type JournalEntryCreateWithoutInputsInput = {
    id?: string
    journalName: string
    dateKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJournalEntriesInput
  }

  export type JournalEntryUncheckedCreateWithoutInputsInput = {
    id?: string
    userId: string
    journalName: string
    dateKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalEntryCreateOrConnectWithoutInputsInput = {
    where: JournalEntryWhereUniqueInput
    create: XOR<JournalEntryCreateWithoutInputsInput, JournalEntryUncheckedCreateWithoutInputsInput>
  }

  export type JournalEntryUpsertWithoutInputsInput = {
    update: XOR<JournalEntryUpdateWithoutInputsInput, JournalEntryUncheckedUpdateWithoutInputsInput>
    create: XOR<JournalEntryCreateWithoutInputsInput, JournalEntryUncheckedCreateWithoutInputsInput>
    where?: JournalEntryWhereInput
  }

  export type JournalEntryUpdateToOneWithWhereWithoutInputsInput = {
    where?: JournalEntryWhereInput
    data: XOR<JournalEntryUpdateWithoutInputsInput, JournalEntryUncheckedUpdateWithoutInputsInput>
  }

  export type JournalEntryUpdateWithoutInputsInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalName?: StringFieldUpdateOperationsInput | string
    dateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJournalEntriesNestedInput
  }

  export type JournalEntryUncheckedUpdateWithoutInputsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    journalName?: StringFieldUpdateOperationsInput | string
    dateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BurnoutAssessmentCreateManyUserInput = {
    id?: string
    assessmentKey: string
    createdAt?: Date | string
    categoryScores: JsonNullValueInput | InputJsonValue
  }

  export type ExerciseCreateManyUserInput = {
    id?: string
    exerciseSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completedPrompts?: number
    completionPercentage?: number
  }

  export type CourseCreateManyUserInput = {
    id?: string
    courseSlug: string
    courseName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StressRatingCreateManyUserInput = {
    id?: string
    rating: number
    createdAt?: Date | string
  }

  export type JournalEntryCreateManyUserInput = {
    id?: string
    journalName: string
    dateKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendedArticleCreateManyUserInput = {
    id?: string
    articleSlug: string
    createdAt?: Date | string
  }

  export type BurnoutAssessmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryScores?: JsonNullValueInput | InputJsonValue
  }

  export type BurnoutAssessmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryScores?: JsonNullValueInput | InputJsonValue
  }

  export type BurnoutAssessmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryScores?: JsonNullValueInput | InputJsonValue
  }

  export type ExerciseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedPrompts?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    encryptedUserInputs?: ExerciseInputUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedPrompts?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    encryptedUserInputs?: ExerciseInputUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedPrompts?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type CourseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseSlug?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: CourseModuleUpdateManyWithoutCourseNestedInput
    resourcesStatus?: CourseResourceStatusUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseSlug?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: CourseModuleUncheckedUpdateManyWithoutCourseNestedInput
    resourcesStatus?: CourseResourceStatusUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseSlug?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StressRatingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StressRatingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StressRatingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalName?: StringFieldUpdateOperationsInput | string
    dateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputs?: JournalEntryInputUpdateManyWithoutJournalEntryNestedInput
  }

  export type JournalEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalName?: StringFieldUpdateOperationsInput | string
    dateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputs?: JournalEntryInputUncheckedUpdateManyWithoutJournalEntryNestedInput
  }

  export type JournalEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalName?: StringFieldUpdateOperationsInput | string
    dateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendedArticleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendedArticleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendedArticleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseInputCreateManyExerciseInput = {
    id?: string
    inputKey: string
    encryptedData: string
    iv: string
  }

  export type ExerciseInputUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputKey?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseInputUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputKey?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseInputUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputKey?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type CourseModuleCreateManyCourseInput = {
    id?: string
    moduleSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseResourceStatusCreateManyCourseInput = {
    id?: string
    resourceName: string
    completed?: boolean
    completedAt?: Date | string | null
  }

  export type CourseModuleUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encryptedInputs?: CourseModuleInputUpdateManyWithoutModuleNestedInput
  }

  export type CourseModuleUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encryptedInputs?: CourseModuleInputUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type CourseModuleUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseResourceStatusUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    resourceName?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseResourceStatusUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    resourceName?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseResourceStatusUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    resourceName?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseModuleInputCreateManyModuleInput = {
    id?: string
    inputId: string
    encryptedData: string
    iv: string
  }

  export type CourseModuleInputUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputId?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type CourseModuleInputUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputId?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type CourseModuleInputUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputId?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type JournalEntryInputCreateManyJournalEntryInput = {
    id?: string
    inputKey: string
    encryptedData: string
    iv: string
  }

  export type JournalEntryInputUpdateWithoutJournalEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputKey?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type JournalEntryInputUncheckedUpdateWithoutJournalEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputKey?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type JournalEntryInputUncheckedUpdateManyWithoutJournalEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputKey?: StringFieldUpdateOperationsInput | string
    encryptedData?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}