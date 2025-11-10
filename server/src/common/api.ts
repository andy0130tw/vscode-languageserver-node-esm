/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { _, Features, _Connection, _LanguagesImpl } from './server';
export { SemanticTokensBuilder } from './semanticTokens';
export type { WorkDoneProgressReporter, WorkDoneProgressServerReporter, ResultProgressReporter } from './progress';

import * as ic from './inlineCompletion.proposed';
import * as tdc from './textDocumentContent';

export * from 'vscode-languageserver-protocol';
export { TextDocuments, type TextDocumentsConfiguration, type TextDocumentChangeEvent, type TextDocumentWillSaveEvent } from './textDocuments';
export { NotebookDocuments } from './notebook';
export * from './server';

export namespace ProposedFeatures {
	export const all: Features<_, _, _, _, _, tdc.TextDocumentContentFeatureShape, ic.InlineCompletionFeatureShape, _> = {
		__brand: 'features',
		workspace: tdc.TextDocumentContentFeature,
		languages: ic.InlineCompletionFeature
	};

	export type Connection = _Connection<_, _, _, _, _, tdc.TextDocumentContentFeatureShape, ic.InlineCompletionFeatureShape, _>;
}