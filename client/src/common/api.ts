/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


export * from 'vscode-languageserver-protocol';

export type { Converter as Code2ProtocolConverter, FileFormattingOptions } from './codeConverter';
export type { Converter as Protocol2CodeConverter } from './protocolConverter';

export * from './features';

export type { PrepareCallHierarchySignature, CallHierarchyIncomingCallsSignature, CallHierarchyOutgoingCallsSignature, CallHierarchyMiddleware } from './callHierarchy';
export type { ProvideCodeActionsSignature, ResolveCodeActionSignature, CodeActionMiddleware } from './codeAction';
export type { ProvideCodeLensesSignature, ResolveCodeLensSignature, CodeLensMiddleware, CodeLensProviderShape } from './codeLens';
export type { ProvideDocumentColorsSignature, ProvideColorPresentationSignature, ColorProviderMiddleware } from './colorProvider';
export type { ProvideCompletionItemsSignature, ResolveCompletionItemSignature, CompletionMiddleware } from './completion';
export type { ConfigurationMiddleware, DidChangeConfigurationSignature, DidChangeConfigurationMiddleware, SynchronizeOptions  } from './configuration';
export type { ProvideDeclarationSignature, DeclarationMiddleware } from './declaration';
export type { ProvideDefinitionSignature, DefinitionMiddleware } from './definition';
export { vsdiag, DiagnosticPullMode } from './diagnostic';
export type { ProvideDiagnosticSignature, ProvideWorkspaceDiagnosticSignature, DiagnosticProviderMiddleware, DiagnosticPullOptions, DiagnosticProviderShape } from './diagnostic';
export type { ProvideDocumentHighlightsSignature, DocumentHighlightMiddleware } from './documentHighlight';
export type { ProvideDocumentLinksSignature, ResolveDocumentLinkSignature, DocumentLinkMiddleware } from './documentLink';
export type { ProvideDocumentSymbolsSignature, DocumentSymbolMiddleware } from './documentSymbol';
export type { ExecuteCommandSignature, ExecuteCommandMiddleware } from './executeCommand';
export type { FileOperationsMiddleware } from './fileOperations';
export type { ProvideFoldingRangeSignature, FoldingRangeProviderMiddleware } from './foldingRange';
export type { ProvideDocumentFormattingEditsSignature, ProvideDocumentRangeFormattingEditsSignature, ProvideOnTypeFormattingEditsSignature, FormattingMiddleware } from './formatting';
export type { ProvideHoverSignature, HoverMiddleware } from './hover';
export type { ProvideImplementationSignature, ImplementationMiddleware } from './implementation';
export type { ProvideInlayHintsSignature, ResolveInlayHintSignature, InlayHintsMiddleware, InlayHintsProviderShape } from './inlayHint';
export type { ProvideInlineValuesSignature, InlineValueMiddleware, InlineValueProviderShape } from './inlineValue';
export type { ProvideLinkedEditingRangeSignature, LinkedEditingRangeMiddleware } from './linkedEditingRange';
export type { NotebookDocumentOptions, NotebookDocumentMiddleware, NotebookDocumentSyncFeatureShape, VNotebookDocumentChangeEvent } from './notebook';
export type { ProvideReferencesSignature, ReferencesMiddleware } from './reference';
export type { ProvideRenameEditsSignature, PrepareRenameSignature, RenameMiddleware } from './rename';
export type { ProvideSelectionRangeSignature, SelectionRangeProviderMiddleware } from './selectionRange';
export type { DocumentSemanticsTokensSignature, DocumentSemanticsTokensEditsSignature, DocumentRangeSemanticTokensSignature, SemanticTokensMiddleware, SemanticTokensProviderShape } from './semanticTokens';
export type { ProvideSignatureHelpSignature, SignatureHelpMiddleware } from './signatureHelp';
export type { TextDocumentSynchronizationMiddleware, DidOpenTextDocumentFeatureShape, DidCloseTextDocumentFeatureShape, DidChangeTextDocumentFeatureShape, DidSaveTextDocumentFeatureShape } from './textSynchronization';
export type { ProvideTypeDefinitionSignature, TypeDefinitionMiddleware } from './typeDefinition';
export type { WorkspaceFolderMiddleware } from './workspaceFolder';
export type { ProvideWorkspaceSymbolsSignature, ResolveWorkspaceSymbolSignature, WorkspaceSymbolMiddleware } from './workspaceSymbol';
export type { PrepareTypeHierarchySignature, TypeHierarchySupertypesSignature, TypeHierarchySubtypesSignature, TypeHierarchyMiddleware } from './typeHierarchy';

export * from './client';
