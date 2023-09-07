import { RecognitionException } from "./RecognitionException.js";
import { Parser } from "../Parser.js";

export declare class InputMismatchException extends RecognitionException {
    public constructor(recognizer: Parser);
}