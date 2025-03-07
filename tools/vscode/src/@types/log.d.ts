/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Version = number;
export type Status = "started" | "success" | "cancelled" | "error";
export type RunId = string;
export type Created = string;
export type Task = string;
export type TaskId = string;
export type TaskVersion = number;
export type TaskFile = string | null;
export type Solver = string | null;
export type SolverArgs = {} | null;
export type Tags = string[] | null;
export type Name = string | null;
export type Location = string | null;
export type Samples = number | null;
export type SampleIds = (number | string)[] | null;
export type Shuffled = boolean | null;
export type Type = string;
export type Model = string;
export type ModelBaseUrl = string | null;
export type Limit = number | [unknown, unknown] | null;
export type SampleId = string | number | (string | number)[] | null;
export type Epochs = number | null;
export type EpochsReducer = string[] | null;
export type Name1 = string;
export type Tools = string | string[];
export type Approvers = ApproverPolicyConfig[];
export type FailOnError = boolean | number | null;
export type MessageLimit = number | null;
export type TokenLimit = number | null;
export type TimeLimit = number | null;
export type WorkingLimit = number | null;
export type MaxSamples = number | null;
export type MaxTasks = number | null;
export type MaxSubprocesses = number | null;
export type MaxSandboxes = number | null;
export type SandboxCleanup = boolean | null;
export type LogSamples = boolean | null;
export type LogImages = boolean | null;
export type LogBuffer = number | null;
export type ScoreDisplay = boolean | null;
export type Type1 = "git";
export type Origin = string;
export type Commit = string;
export type Metadata = {} | null;
export type Scorers = EvalScorer[] | null;
export type Name2 = string;
export type Options = {} | null;
export type Metrics =
  | (
      | EvalMetricDefinition
      | {
          [k: string]: EvalMetricDefinition[];
        }
    )[]
  | {
      [k: string]: EvalMetricDefinition[];
    }
  | null;
export type Name3 = string;
export type Options1 = {} | null;
export type Metadata1 = {} | null;
export type Metrics1 =
  | EvalMetricDefinition[]
  | {
      [k: string]: EvalMetricDefinition[];
    }
  | null;
export type Name4 = string;
export type Solver1 = string;
export type Steps = EvalPlanStep[];
export type MaxRetries = number | null;
export type Timeout = number | null;
export type MaxConnections = number | null;
export type SystemMessage = string | null;
export type MaxTokens = number | null;
export type TopP = number | null;
export type Temperature = number | null;
export type StopSeqs = string[] | null;
export type BestOf = number | null;
export type FrequencyPenalty = number | null;
export type PresencePenalty = number | null;
export type LogitBias = {
  [k: string]: number;
} | null;
export type Seed = number | null;
export type TopK = number | null;
export type NumChoices = number | null;
export type Logprobs = boolean | null;
export type TopLogprobs = number | null;
export type ParallelToolCalls = boolean | null;
export type InternalTools = boolean | null;
export type MaxToolOutput = number | null;
export type CachePrompt = "auto" | boolean | null;
export type ReasoningEffort = ("low" | "medium" | "high") | null;
export type ReasoningTokens = number | null;
export type ReasoningHistory = ("none" | "all" | "last" | "auto") | null;
export type Name5 = string;
export type Type2 =
  | ("string" | "integer" | "number" | "boolean" | "array" | "object" | "null")
  | null;
export type Description = string | null;
export type Enum = unknown[] | null;
export type Properties = {
  [k: string]: JSONSchema;
} | null;
export type Additionalproperties = JSONSchema | boolean | null;
export type Anyof = JSONSchema[] | null;
export type Required = string[] | null;
export type Description1 = string | null;
export type Strict = boolean | null;
export type TotalSamples = number;
export type CompletedSamples = number;
export type Name6 = string;
export type Scorer = string;
export type Reducer = string | null;
export type Name7 = string;
export type Value = number;
export type Metadata2 = {} | null;
export type Metadata3 = {} | null;
export type Scores = EvalScore[];
export type Metadata4 = {} | null;
export type StartedAt = string;
export type CompletedAt = string;
export type InputTokens = number;
export type OutputTokens = number;
export type TotalTokens = number;
export type InputTokensCacheWrite = number | null;
export type InputTokensCacheRead = number | null;
export type ReasoningTokens1 = number | null;
export type Message = string;
export type Traceback = string;
export type TracebackAnsi = string;
export type Samples1 = EvalSample[] | null;
export type Id = number | string;
export type Epoch = number;
export type Input =
  | string
  | (
      | ChatMessageSystem
      | ChatMessageUser
      | ChatMessageAssistant
      | ChatMessageTool
    )[];
export type Id1 = string;
export type Content =
  | string
  | (
      | ContentText
      | ContentReasoning
      | ContentImage
      | ContentAudio
      | ContentVideo
    )[];
export type Type3 = "text";
export type Text = string;
export type Type4 = "reasoning";
export type Reasoning = string;
export type Signature = string | null;
export type Redacted = boolean;
export type Type5 = "image";
export type Image = string;
export type Detail = "auto" | "low" | "high";
export type Type6 = "audio";
export type Audio = string;
export type Format = "wav" | "mp3";
export type Type7 = "video";
export type Video = string;
export type Format1 = "mp4" | "mpeg" | "mov";
export type Source = ("input" | "generate") | null;
export type Role = "system";
export type Id2 = string;
export type Content1 =
  | string
  | (
      | ContentText
      | ContentReasoning
      | ContentImage
      | ContentAudio
      | ContentVideo
    )[];
export type Source1 = ("input" | "generate") | null;
export type Role1 = "user";
export type ToolCallId = string[] | null;
export type Id3 = string;
export type Content2 =
  | string
  | (
      | ContentText
      | ContentReasoning
      | ContentImage
      | ContentAudio
      | ContentVideo
    )[];
export type Source2 = ("input" | "generate") | null;
export type Role2 = "assistant";
export type ToolCalls = ToolCall[] | null;
export type Id4 = string;
export type Function = string;
export type Type8 = "function";
export type ParseError = string | null;
export type Title = string | null;
export type Format2 = "text" | "markdown";
export type Content3 = string;
export type Id5 = string;
export type Content4 =
  | string
  | (
      | ContentText
      | ContentReasoning
      | ContentImage
      | ContentAudio
      | ContentVideo
    )[];
export type Source3 = ("input" | "generate") | null;
export type Role3 = "tool";
export type ToolCallId1 = string | null;
export type Function1 = string | null;
export type Type9 =
  | "parsing"
  | "timeout"
  | "unicode_decode"
  | "permission"
  | "file_not_found"
  | "is_a_directory"
  | "output_limit"
  | "approval"
  | "unknown";
export type Message1 = string;
export type Choices = string[] | null;
export type Target = string | string[];
export type Files = string[] | null;
export type Setup = string | null;
export type Messages = (
  | ChatMessageSystem
  | ChatMessageUser
  | ChatMessageAssistant
  | ChatMessageTool
)[];
export type Model1 = string;
export type StopReason =
  | "stop"
  | "max_tokens"
  | "model_length"
  | "tool_calls"
  | "content_filter"
  | "unknown";
export type Token = string;
export type Logprob1 = number;
export type Bytes = number[] | null;
export type TopLogprobs1 = TopLogprob[] | null;
export type Token1 = string;
export type Logprob2 = number;
export type Bytes1 = number[] | null;
export type Content5 = Logprob[];
export type Choices1 = ChatCompletionChoice[];
export type Time = number | null;
export type Metadata5 = {} | null;
export type Error = string | null;
export type Scores1 = {
  [k: string]: Score;
} | null;
export type Value1 =
  | string
  | number
  | boolean
  | (string | number | boolean)[]
  | {
      [k: string]: string | number | boolean | null;
    };
export type Answer = string | null;
export type Explanation = string | null;
export type Metadata6 = {} | null;
export type Timestamp = string;
export type WorkingStart = number;
export type Pending = boolean | null;
export type Event = "sample_init";
export type Input1 =
  | string
  | (
      | ChatMessageSystem
      | ChatMessageUser
      | ChatMessageAssistant
      | ChatMessageTool
    )[];
export type Choices2 = string[] | null;
export type Target1 = string | string[];
export type Id6 = number | string | null;
export type Metadata8 = {} | null;
export type Files1 = {
  [k: string]: string;
} | null;
export type Setup1 = string | null;
export type JsonValue = unknown;
export type Timestamp1 = string;
export type WorkingStart1 = number;
export type Pending1 = boolean | null;
export type Event1 = "sample_limit";
export type Type10 =
  | "message"
  | "time"
  | "working"
  | "token"
  | "operator"
  | "custom";
export type Message2 = string;
export type Limit1 = number | null;
export type Timestamp2 = string;
export type WorkingStart2 = number;
export type Pending2 = boolean | null;
export type Event2 = "sandbox";
export type Action = "exec" | "read_file" | "write_file";
export type Cmd = string | null;
export type Options2 = {
  [k: string]: JsonValue;
} | null;
export type File = string | null;
export type Input2 = string | null;
export type Result = number | null;
export type Output = string | null;
export type Completed = string | null;
export type Timestamp3 = string;
export type WorkingStart3 = number;
export type Pending3 = boolean | null;
export type Event3 = "state";
export type Op = "remove" | "add" | "replace" | "move" | "test" | "copy";
export type Path = string;
export type From = string | null;
export type Changes = JsonChange[];
export type Timestamp4 = string;
export type WorkingStart4 = number;
export type Pending4 = boolean | null;
export type Event4 = "store";
export type Changes1 = JsonChange[];
export type Timestamp5 = string;
export type WorkingStart5 = number;
export type Pending5 = boolean | null;
export type Event5 = "model";
export type Model2 = string;
export type Input3 = (
  | ChatMessageSystem
  | ChatMessageUser
  | ChatMessageAssistant
  | ChatMessageTool
)[];
export type Name8 = string;
export type Description2 = string;
export type Type11 = "object";
export type Required1 = string[];
export type Additionalproperties1 = boolean;
export type Tools1 = ToolInfo[];
export type ToolChoice = ("auto" | "any" | "none") | ToolFunction;
export type Name9 = string;
export type Error1 = string | null;
export type Cache = ("read" | "write") | null;
export type Time1 = number | null;
export type Completed1 = string | null;
export type WorkingTime = number | null;
export type Timestamp6 = string;
export type WorkingStart6 = number;
export type Pending6 = boolean | null;
export type Event6 = "tool";
export type Type12 = "function";
export type Id7 = string;
export type Function2 = string;
export type Result1 =
  | string
  | number
  | boolean
  | ContentText
  | ContentReasoning
  | ContentImage
  | ContentAudio
  | ContentVideo
  | (
      | ContentText
      | ContentReasoning
      | ContentImage
      | ContentAudio
      | ContentVideo
    )[];
export type Truncated = [unknown, unknown] | null;
export type Timestamp7 = string;
export type WorkingStart7 = number;
export type Pending7 = boolean | null;
export type Event7 = "approval";
export type Message3 = string;
export type Approver = string;
export type Decision =
  | "approve"
  | "modify"
  | "reject"
  | "escalate"
  | "terminate";
export type Explanation1 = string | null;
export type Timestamp8 = string;
export type WorkingStart8 = number;
export type Pending8 = boolean | null;
export type Event8 = "input";
export type Input4 = string;
export type InputAnsi = string;
export type Timestamp9 = string;
export type WorkingStart9 = number;
export type Pending9 = boolean | null;
export type Event9 = "score";
export type Target2 = string | string[] | null;
export type Intermediate = boolean;
export type Timestamp10 = string;
export type WorkingStart10 = number;
export type Pending10 = boolean | null;
export type Event10 = "error";
export type Timestamp11 = string;
export type WorkingStart11 = number;
export type Pending11 = boolean | null;
export type Event11 = "logger";
export type Name10 = string | null;
export type Level =
  | "debug"
  | "trace"
  | "http"
  | "sandbox"
  | "info"
  | "warning"
  | "error"
  | "critical";
export type Message4 = string;
export type Created1 = number;
export type Filename = string;
export type Module = string;
export type Lineno = number;
export type Timestamp12 = string;
export type WorkingStart12 = number;
export type Pending12 = boolean | null;
export type Event12 = "info";
export type Source4 = string | null;
export type Timestamp13 = string;
export type WorkingStart13 = number;
export type Pending13 = boolean | null;
export type Event13 = "step";
export type Action1 = "begin" | "end";
export type Type13 = string | null;
export type Name11 = string;
export type Timestamp14 = string;
export type WorkingStart14 = number;
export type Pending14 = boolean | null;
export type Event14 = "subtask";
export type Name12 = string;
export type Type14 = string | null;
export type Events2 = (
  | SampleInitEvent
  | SampleLimitEvent
  | SandboxEvent
  | StateEvent
  | StoreEvent
  | ModelEvent
  | ToolEvent
  | ApprovalEvent
  | InputEvent
  | ScoreEvent
  | ErrorEvent
  | LoggerEvent
  | InfoEvent
  | StepEvent
  | SubtaskEvent
)[];
export type Completed2 = string | null;
export type WorkingTime1 = number | null;
export type Events1 = (
  | SampleInitEvent
  | SampleLimitEvent
  | SandboxEvent
  | StateEvent
  | StoreEvent
  | ModelEvent
  | ToolEvent
  | ApprovalEvent
  | InputEvent
  | ScoreEvent
  | ErrorEvent
  | LoggerEvent
  | InfoEvent
  | StepEvent
  | SubtaskEvent
)[];
export type Completed3 = string | null;
export type WorkingTime2 = number | null;
export type Events = (
  | SampleInitEvent
  | SampleLimitEvent
  | SandboxEvent
  | StateEvent
  | StoreEvent
  | ModelEvent
  | ToolEvent
  | ApprovalEvent
  | InputEvent
  | ScoreEvent
  | ErrorEvent
  | LoggerEvent
  | InfoEvent
  | StepEvent
  | SubtaskEvent
)[];
export type TotalTime = number | null;
export type WorkingTime3 = number | null;
export type Uuid = string | null;
export type Type15 =
  | "context"
  | "time"
  | "working"
  | "message"
  | "token"
  | "operator"
  | "custom";
export type Limit2 = number;
export type Reductions = EvalSampleReductions[] | null;
export type Scorer1 = string;
export type Reducer1 = string | null;
export type Value2 =
  | string
  | number
  | boolean
  | (string | number | boolean)[]
  | {
      [k: string]: string | number | boolean | null;
    };
export type Answer1 = string | null;
export type Explanation2 = string | null;
export type Metadata9 = {} | null;
export type SampleId1 = string | number | null;
export type Samples2 = EvalSampleScore[];
export type Location1 = string;

/**
 * Evaluation log.
 */
export interface EvalLog {
  version?: Version;
  status?: Status;
  eval: EvalSpec;
  plan?: EvalPlan;
  results?: EvalResults | null;
  stats?: EvalStats;
  error?: EvalError | null;
  samples?: Samples1;
  reductions?: Reductions;
  location?: Location1;
}
/**
 * Eval target and configuration.
 */
export interface EvalSpec {
  run_id: RunId;
  created: Created;
  task: Task;
  task_id: TaskId;
  task_version: TaskVersion;
  task_file: TaskFile;
  task_attribs: TaskAttribs;
  task_args: TaskArgs;
  solver: Solver;
  solver_args: SolverArgs;
  tags: Tags;
  dataset: EvalDataset;
  sandbox: SandboxEnvironmentSpec | null;
  model: Model;
  model_base_url: ModelBaseUrl;
  model_args: ModelArgs;
  config: EvalConfig;
  revision: EvalRevision | null;
  packages: Packages;
  metadata: Metadata;
  scorers: Scorers;
  metrics: Metrics1;
}
export interface TaskAttribs {}
export interface TaskArgs {}
/**
 * Dataset used for evaluation.
 */
export interface EvalDataset {
  name: Name;
  location: Location;
  samples: Samples;
  sample_ids: SampleIds;
  shuffled: Shuffled;
}
/**
 * Specification of a SandboxEnvironment.
 */
export interface SandboxEnvironmentSpec {
  type: Type;
  config: Config;
}
export interface Config {
  [k: string]: unknown;
}
export interface ModelArgs {}
/**
 * Configuration used for evaluation.
 */
export interface EvalConfig {
  limit: Limit;
  sample_id: SampleId;
  epochs: Epochs;
  epochs_reducer: EpochsReducer;
  approval: ApprovalPolicyConfig | null;
  fail_on_error: FailOnError;
  message_limit: MessageLimit;
  token_limit: TokenLimit;
  time_limit: TimeLimit;
  working_limit: WorkingLimit;
  max_samples: MaxSamples;
  max_tasks: MaxTasks;
  max_subprocesses: MaxSubprocesses;
  max_sandboxes: MaxSandboxes;
  sandbox_cleanup: SandboxCleanup;
  log_samples: LogSamples;
  log_images: LogImages;
  log_buffer: LogBuffer;
  score_display: ScoreDisplay;
}
export interface ApprovalPolicyConfig {
  approvers: Approvers;
}
/**
 * Configuration format for approver policies.
 *
 * For example, here is a configuration in YAML:
 *
 * ```yaml
 * approvers:
 *   - name: human
 *     tools: web_browser*, bash, pyhton
 *     choices: [approve, reject]
 *
 *   - name: auto
 *     tools: *
 *     decision: approve
 * ```
 */
export interface ApproverPolicyConfig {
  name: Name1;
  tools: Tools;
  params: Params;
}
export interface Params {}
/**
 * Git revision for evaluation.
 */
export interface EvalRevision {
  type: Type1;
  origin: Origin;
  commit: Commit;
}
export interface Packages {
  [k: string]: string;
}
export interface EvalScorer {
  name: Name2;
  options: Options;
  metrics: Metrics;
  metadata: Metadata1;
}
export interface EvalMetricDefinition {
  name: Name3;
  options: Options1;
}
/**
 * Plan (solvers) used in evaluation.
 */
export interface EvalPlan {
  name: Name4;
  steps: Steps;
  finish: EvalPlanStep | null;
  config: GenerateConfig;
}
/**
 * Solver step.
 */
export interface EvalPlanStep {
  solver: Solver1;
  params: Params1;
}
export interface Params1 {}
/**
 * Model generation options.
 */
export interface GenerateConfig {
  max_retries: MaxRetries;
  timeout: Timeout;
  max_connections: MaxConnections;
  system_message: SystemMessage;
  max_tokens: MaxTokens;
  top_p: TopP;
  temperature: Temperature;
  stop_seqs: StopSeqs;
  best_of: BestOf;
  frequency_penalty: FrequencyPenalty;
  presence_penalty: PresencePenalty;
  logit_bias: LogitBias;
  seed: Seed;
  top_k: TopK;
  num_choices: NumChoices;
  logprobs: Logprobs;
  top_logprobs: TopLogprobs;
  parallel_tool_calls: ParallelToolCalls;
  internal_tools: InternalTools;
  max_tool_output: MaxToolOutput;
  cache_prompt: CachePrompt;
  reasoning_effort: ReasoningEffort;
  reasoning_tokens: ReasoningTokens;
  reasoning_history: ReasoningHistory;
  response_schema: ResponseSchema | null;
}
/**
 * Schema for model response when using Structured Output.
 */
export interface ResponseSchema {
  name: Name5;
  json_schema: JSONSchema;
  description: Description1;
  strict: Strict;
}
/**
 * JSON Schema for type.
 */
export interface JSONSchema {
  type: Type2;
  description: Description;
  default: Default;
  enum: Enum;
  items: JSONSchema | null;
  properties: Properties;
  additionalProperties: Additionalproperties;
  anyOf: Anyof;
  required: Required;
}
export interface Default {
  [k: string]: unknown;
}
/**
 * Scoring results from evaluation.
 */
export interface EvalResults {
  total_samples: TotalSamples;
  completed_samples: CompletedSamples;
  scores: Scores;
  metadata: Metadata4;
}
/**
 * Score for evaluation task.
 */
export interface EvalScore {
  name: Name6;
  scorer: Scorer;
  reducer: Reducer;
  params: Params2;
  metrics: Metrics2;
  metadata: Metadata3;
}
export interface Params2 {}
export interface Metrics2 {
  [k: string]: EvalMetric;
}
/**
 * Metric for evaluation score.
 */
export interface EvalMetric {
  name: Name7;
  value: Value;
  params: Params3;
  metadata: Metadata2;
}
export interface Params3 {}
/**
 * Timing and usage statistics.
 */
export interface EvalStats {
  started_at: StartedAt;
  completed_at: CompletedAt;
  model_usage: ModelUsage;
}
export interface ModelUsage {
  [k: string]: ModelUsage1;
}
/**
 * Token usage for completion.
 */
export interface ModelUsage1 {
  input_tokens: InputTokens;
  output_tokens: OutputTokens;
  total_tokens: TotalTokens;
  input_tokens_cache_write: InputTokensCacheWrite;
  input_tokens_cache_read: InputTokensCacheRead;
  reasoning_tokens: ReasoningTokens1;
}
/**
 * Eval error details.
 */
export interface EvalError {
  message: Message;
  traceback: Traceback;
  traceback_ansi: TracebackAnsi;
}
/**
 * Sample from evaluation task.
 */
export interface EvalSample {
  id: Id;
  epoch: Epoch;
  input: Input;
  choices: Choices;
  target: Target;
  sandbox: SandboxEnvironmentSpec | null;
  files: Files;
  setup: Setup;
  messages: Messages;
  output: ModelOutput;
  scores: Scores1;
  metadata: Metadata7;
  store: Store;
  events: Events;
  model_usage: ModelUsage2;
  total_time: TotalTime;
  working_time: WorkingTime3;
  uuid: Uuid;
  error: EvalError | null;
  attachments: Attachments;
  limit: EvalSampleLimit | null;
}
/**
 * System chat message.
 */
export interface ChatMessageSystem {
  id: Id1;
  content: Content;
  source: Source;
  role: Role;
}
/**
 * Text content.
 */
export interface ContentText {
  type: Type3;
  text: Text;
}
/**
 * Reasoning content.
 *
 * See the specification for [thinking blocks](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking#understanding-thinking-blocks) for Claude models.
 */
export interface ContentReasoning {
  type: Type4;
  reasoning: Reasoning;
  signature: Signature;
  redacted: Redacted;
}
/**
 * Image content.
 */
export interface ContentImage {
  type: Type5;
  image: Image;
  detail: Detail;
}
/**
 * Audio content.
 */
export interface ContentAudio {
  type: Type6;
  audio: Audio;
  format: Format;
}
/**
 * Video content.
 */
export interface ContentVideo {
  type: Type7;
  video: Video;
  format: Format1;
}
/**
 * User chat message.
 */
export interface ChatMessageUser {
  id: Id2;
  content: Content1;
  source: Source1;
  role: Role1;
  tool_call_id: ToolCallId;
}
/**
 * Assistant chat message.
 */
export interface ChatMessageAssistant {
  id: Id3;
  content: Content2;
  source: Source2;
  role: Role2;
  tool_calls: ToolCalls;
}
export interface ToolCall {
  id: Id4;
  function: Function;
  arguments: Arguments;
  type: Type8;
  parse_error: ParseError;
  view: ToolCallContent | null;
}
export interface Arguments {}
/**
 * Content to include in tool call view.
 */
export interface ToolCallContent {
  title: Title;
  format: Format2;
  content: Content3;
}
/**
 * Tool chat message.
 */
export interface ChatMessageTool {
  id: Id5;
  content: Content4;
  source: Source3;
  role: Role3;
  tool_call_id: ToolCallId1;
  function: Function1;
  error: ToolCallError | null;
}
export interface ToolCallError {
  type: Type9;
  message: Message1;
}
/**
 * Output from model generation.
 */
export interface ModelOutput {
  model: Model1;
  choices: Choices1;
  usage: ModelUsage1 | null;
  time: Time;
  metadata: Metadata5;
  error: Error;
}
/**
 * Choice generated for completion.
 */
export interface ChatCompletionChoice {
  message: ChatMessageAssistant;
  stop_reason: StopReason;
  logprobs: Logprobs1 | null;
}
/**
 * Log probability information for a completion choice.
 */
export interface Logprobs1 {
  content: Content5;
}
/**
 * Log probability for a token.
 */
export interface Logprob {
  token: Token;
  logprob: Logprob1;
  bytes: Bytes;
  top_logprobs: TopLogprobs1;
}
/**
 * List of the most likely tokens and their log probability, at this token position.
 */
export interface TopLogprob {
  token: Token1;
  logprob: Logprob2;
  bytes: Bytes1;
}
/**
 * Score generated by a scorer.
 */
export interface Score {
  value: Value1;
  answer: Answer;
  explanation: Explanation;
  metadata: Metadata6;
}
export interface Metadata7 {}
export interface Store {}
/**
 * Beginning of processing a Sample.
 */
export interface SampleInitEvent {
  timestamp: Timestamp;
  working_start: WorkingStart;
  pending: Pending;
  event: Event;
  sample: Sample;
  state: JsonValue;
}
/**
 * Sample for an evaluation task.
 */
export interface Sample {
  input: Input1;
  choices: Choices2;
  target: Target1;
  id: Id6;
  metadata: Metadata8;
  sandbox: SandboxEnvironmentSpec | null;
  files: Files1;
  setup: Setup1;
}
/**
 * The sample was unable to finish processing due to a limit
 */
export interface SampleLimitEvent {
  timestamp: Timestamp1;
  working_start: WorkingStart1;
  pending: Pending1;
  event: Event1;
  type: Type10;
  message: Message2;
  limit: Limit1;
}
/**
 * Sandbox execution or I/O
 */
export interface SandboxEvent {
  timestamp: Timestamp2;
  working_start: WorkingStart2;
  pending: Pending2;
  event: Event2;
  action: Action;
  cmd: Cmd;
  options: Options2;
  file: File;
  input: Input2;
  result: Result;
  output: Output;
  completed: Completed;
}
/**
 * Change to the current `TaskState`
 */
export interface StateEvent {
  timestamp: Timestamp3;
  working_start: WorkingStart3;
  pending: Pending3;
  event: Event3;
  changes: Changes;
}
/**
 * Describes a change to data using JSON Patch format.
 */
export interface JsonChange {
  op: Op;
  path: Path;
  from: From;
  value: {
    [k: string]: unknown;
  };
  replaced: {
    [k: string]: unknown;
  };
}
/**
 * Change to data within the current `Store`.
 */
export interface StoreEvent {
  timestamp: Timestamp4;
  working_start: WorkingStart4;
  pending: Pending4;
  event: Event4;
  changes: Changes1;
}
/**
 * Call to a language model.
 */
export interface ModelEvent {
  timestamp: Timestamp5;
  working_start: WorkingStart5;
  pending: Pending5;
  event: Event5;
  model: Model2;
  input: Input3;
  tools: Tools1;
  tool_choice: ToolChoice;
  config: GenerateConfig1;
  output: ModelOutput;
  error: Error1;
  cache: Cache;
  call: ModelCall | null;
  completed: Completed1;
  working_time: WorkingTime;
}
/**
 * Specification of a tool (JSON Schema compatible)
 *
 * If you are implementing a ModelAPI, most LLM libraries can
 * be passed this object (dumped to a dict) directly as a function
 * specification. For example, in the OpenAI provider:
 *
 * ```python
 * ChatCompletionToolParam(
 *     type="function",
 *     function=tool.model_dump(exclude_none=True),
 * )
 * ```
 *
 * In some cases the field names don't match up exactly. In that case
 * call `model_dump()` on the `parameters` field. For example, in the
 * Anthropic provider:
 *
 * ```python
 * ToolParam(
 *     name=tool.name,
 *     description=tool.description,
 *     input_schema=tool.parameters.model_dump(exclude_none=True),
 * )
 * ```
 */
export interface ToolInfo {
  name: Name8;
  description: Description2;
  parameters: ToolParams;
}
/**
 * Description of tool parameters object in JSON Schema format.
 */
export interface ToolParams {
  type: Type11;
  properties: Properties1;
  required: Required1;
  additionalProperties: Additionalproperties1;
}
export interface Properties1 {
  [k: string]: JSONSchema;
}
export interface ToolFunction {
  name: Name9;
}
/**
 * Model generation options.
 */
export interface GenerateConfig1 {
  max_retries: MaxRetries;
  timeout: Timeout;
  max_connections: MaxConnections;
  system_message: SystemMessage;
  max_tokens: MaxTokens;
  top_p: TopP;
  temperature: Temperature;
  stop_seqs: StopSeqs;
  best_of: BestOf;
  frequency_penalty: FrequencyPenalty;
  presence_penalty: PresencePenalty;
  logit_bias: LogitBias;
  seed: Seed;
  top_k: TopK;
  num_choices: NumChoices;
  logprobs: Logprobs;
  top_logprobs: TopLogprobs;
  parallel_tool_calls: ParallelToolCalls;
  internal_tools: InternalTools;
  max_tool_output: MaxToolOutput;
  cache_prompt: CachePrompt;
  reasoning_effort: ReasoningEffort;
  reasoning_tokens: ReasoningTokens;
  reasoning_history: ReasoningHistory;
  response_schema: ResponseSchema | null;
}
/**
 * Model call (raw request/response data).
 */
export interface ModelCall {
  request: Request;
  response: Response;
  time: Time1;
}
export interface Request {
  [k: string]: JsonValue;
}
export interface Response {
  [k: string]: JsonValue;
}
/**
 * Call to a tool.
 */
export interface ToolEvent {
  timestamp: Timestamp6;
  working_start: WorkingStart6;
  pending: Pending6;
  event: Event6;
  type: Type12;
  id: Id7;
  function: Function2;
  arguments: Arguments1;
  view: ToolCallContent | null;
  result: Result1;
  truncated: Truncated;
  error: ToolCallError | null;
  events: Events1;
  completed: Completed3;
  working_time: WorkingTime2;
}
export interface Arguments1 {
  [k: string]: JsonValue;
}
/**
 * Tool approval.
 */
export interface ApprovalEvent {
  timestamp: Timestamp7;
  working_start: WorkingStart7;
  pending: Pending7;
  event: Event7;
  message: Message3;
  call: ToolCall;
  view: ToolCallView | null;
  approver: Approver;
  decision: Decision;
  modified: ToolCall | null;
  explanation: Explanation1;
}
/**
 * Custom view of a tool call.
 *
 * Both `context` and `call` are optional. If `call` is not specified
 * then the view will default to a syntax highlighted Python function call.
 */
export interface ToolCallView {
  context: ToolCallContent | null;
  call: ToolCallContent | null;
}
/**
 * Input screen interaction.
 */
export interface InputEvent {
  timestamp: Timestamp8;
  working_start: WorkingStart8;
  pending: Pending8;
  event: Event8;
  input: Input4;
  input_ansi: InputAnsi;
}
/**
 * Event with score.
 *
 * Can be the final score for a `Sample`, or can be an intermediate score
 * resulting from a call to `score`.
 */
export interface ScoreEvent {
  timestamp: Timestamp9;
  working_start: WorkingStart9;
  pending: Pending9;
  event: Event9;
  score: Score;
  target: Target2;
  intermediate: Intermediate;
}
/**
 * Event with sample error.
 */
export interface ErrorEvent {
  timestamp: Timestamp10;
  working_start: WorkingStart10;
  pending: Pending10;
  event: Event10;
  error: EvalError;
}
/**
 * Log message recorded with Python logger.
 */
export interface LoggerEvent {
  timestamp: Timestamp11;
  working_start: WorkingStart11;
  pending: Pending11;
  event: Event11;
  message: LoggingMessage;
}
/**
 * Message written to Python log.
 */
export interface LoggingMessage {
  name: Name10;
  level: Level;
  message: Message4;
  created: Created1;
  filename: Filename;
  module: Module;
  lineno: Lineno;
}
/**
 * Event with custom info/data.
 */
export interface InfoEvent {
  timestamp: Timestamp12;
  working_start: WorkingStart12;
  pending: Pending12;
  event: Event12;
  source: Source4;
  data: JsonValue;
}
/**
 * Step within current sample or subtask.
 */
export interface StepEvent {
  timestamp: Timestamp13;
  working_start: WorkingStart13;
  pending: Pending13;
  event: Event13;
  action: Action1;
  type: Type13;
  name: Name11;
}
/**
 * Subtask spawned.
 */
export interface SubtaskEvent {
  timestamp: Timestamp14;
  working_start: WorkingStart14;
  pending: Pending14;
  event: Event14;
  name: Name12;
  type: Type14;
  input: Input5;
  result: Result2;
  events: Events2;
  completed: Completed2;
  working_time: WorkingTime1;
}
export interface Input5 {}
export interface Result2 {
  [k: string]: unknown;
}
export interface ModelUsage2 {
  [k: string]: ModelUsage1;
}
export interface Attachments {
  [k: string]: string;
}
/**
 * Limit encontered by sample.
 */
export interface EvalSampleLimit {
  type: Type15;
  limit: Limit2;
}
/**
 * Score reductions.
 */
export interface EvalSampleReductions {
  scorer: Scorer1;
  reducer: Reducer1;
  samples: Samples2;
}
/**
 * Score and sample_id scored.
 */
export interface EvalSampleScore {
  value: Value2;
  answer: Answer1;
  explanation: Explanation2;
  metadata: Metadata9;
  sample_id: SampleId1;
}
