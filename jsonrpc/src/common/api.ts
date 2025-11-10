/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
/// <reference path="../../typings/thenable.d.ts" preserve="true"/>

import {
	Message, MessageSignature, RequestMessage, RequestType, RequestType0, RequestType1, RequestType2, RequestType3, RequestType4, RequestType5, RequestType6,
	RequestType7, RequestType8, RequestType9, ResponseError, ErrorCodes, NotificationMessage, NotificationType, NotificationType0, NotificationType1,
	NotificationType2, NotificationType3, NotificationType4, NotificationType5, NotificationType6, NotificationType7, NotificationType8,
	NotificationType9, ResponseMessage, ParameterStructures, _EM
} from './messages';

import { LinkedMap, LRUCache, Touch } from './linkedMap';
import { Disposable } from './disposable';
import { Event, Emitter } from './events';
import { AbstractCancellationTokenSource, CancellationTokenSource, CancellationToken } from './cancellation';
import { SharedArraySenderStrategy, SharedArrayReceiverStrategy } from './sharedArrayCancellation';
import { MessageReader, AbstractMessageReader, ReadableStreamMessageReader, DataCallback, MessageReaderOptions, PartialMessageInfo } from './messageReader';
import { MessageWriter, AbstractMessageWriter, WriteableStreamMessageWriter, MessageWriterOptions } from './messageWriter';
import { AbstractMessageBuffer } from './messageBuffer';
import { ContentTypeEncoderOptions, ContentEncoder, ContentTypeEncoder, ContentTypeDecoderOptions, ContentDecoder, ContentTypeDecoder } from './encoding';
import {
	Logger, ConnectionStrategy, ConnectionOptions, MessageConnection, NullLogger, createMessageConnection,
	ProgressToken, ProgressType, HandlerResult, StarRequestHandler, GenericRequestHandler,
	RequestHandler0, RequestHandler, RequestHandler1, RequestHandler2, RequestHandler3, RequestHandler4, RequestHandler5, RequestHandler6, RequestHandler7, RequestHandler8,
	RequestHandler9, StarNotificationHandler, GenericNotificationHandler, NotificationHandler0, NotificationHandler, NotificationHandler1, NotificationHandler2, NotificationHandler3,
	NotificationHandler4, NotificationHandler5, NotificationHandler6, NotificationHandler7, NotificationHandler8, NotificationHandler9, Trace, TraceValue, TraceFormat,
	TraceOptions, SetTraceParams, SetTraceNotification, LogTraceParams, LogTraceNotification, Tracer, ConnectionErrors, ConnectionError, CancellationId,
	CancellationReceiverStrategy, IdCancellationReceiverStrategy, RequestCancellationReceiverStrategy, CancellationSenderStrategy, CancellationStrategy, MessageStrategy, TraceValues
} from './connection';

import RAL from './ral';

export {
	RAL,
	// Export from messages
	Message, type MessageSignature, type RequestMessage, RequestType, RequestType0, RequestType1, RequestType2, RequestType3, RequestType4, RequestType5, RequestType6,
	RequestType7, RequestType8, RequestType9, ResponseError, ErrorCodes, type NotificationMessage, NotificationType, NotificationType0, NotificationType1,
	NotificationType2, NotificationType3, NotificationType4, NotificationType5, NotificationType6, NotificationType7, NotificationType8,
	NotificationType9, type ResponseMessage, ParameterStructures, type _EM,
	// Export from linkedMap
	LinkedMap, Touch, LRUCache,
	// Export from disposable
	Disposable,
	// Export from events
	Event, Emitter,
	// Export from cancellation
	type AbstractCancellationTokenSource, CancellationTokenSource, CancellationToken,
	// Export form sharedArrayCancellation
	SharedArraySenderStrategy, SharedArrayReceiverStrategy,
	// Export from message reader
	MessageReader, AbstractMessageReader, ReadableStreamMessageReader, type DataCallback, type MessageReaderOptions, type PartialMessageInfo,
	// Export from message write
	MessageWriter, AbstractMessageWriter, WriteableStreamMessageWriter, type  MessageWriterOptions,
	// Export from abstract message buffer
	AbstractMessageBuffer,
	// Export from encodings
	type ContentTypeEncoderOptions, type ContentEncoder, type ContentTypeEncoder, type ContentTypeDecoderOptions, type ContentDecoder, type ContentTypeDecoder,
	// Export from connection
	type Logger, ConnectionStrategy, ConnectionOptions, type MessageConnection, NullLogger, createMessageConnection,
	ProgressToken, ProgressType, type HandlerResult, type StarRequestHandler, type GenericRequestHandler,
	type RequestHandler0, type RequestHandler, type RequestHandler1, type RequestHandler2, type RequestHandler3, type RequestHandler4, type RequestHandler5, type RequestHandler6, type RequestHandler7, type RequestHandler8,
	type RequestHandler9, type StarNotificationHandler, type GenericNotificationHandler, type NotificationHandler0, type NotificationHandler, type NotificationHandler1, type NotificationHandler2, type NotificationHandler3,
	type NotificationHandler4, type NotificationHandler5, type NotificationHandler6, type NotificationHandler7, type NotificationHandler8, type NotificationHandler9, Trace, TraceValue, TraceValues, TraceFormat,
	type TraceOptions, type SetTraceParams, SetTraceNotification, type LogTraceParams, LogTraceNotification, type Tracer, ConnectionErrors, ConnectionError, type CancellationId,
	CancellationReceiverStrategy,  IdCancellationReceiverStrategy, RequestCancellationReceiverStrategy, CancellationSenderStrategy, CancellationStrategy, MessageStrategy
};
