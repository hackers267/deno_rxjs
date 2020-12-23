
/**
 *  RxJS - Deno Version 2020

    This product is a modified by DenoBR 
    Comunitty for add support for Deno

    This file is modified by DenoBR
 */

/* Observable */
export { Observable } from './src/internal/Observable.ts';
export { ConnectableObservable } from './src/internal/observable/ConnectableObservable.ts';
export { GroupedObservable } from './src/internal/operators/groupBy.ts';
export type { Operator } from './src/internal/Operator.ts';
export { observable } from './src/internal/symbol/observable.ts';
export { animationFrames } from './src/internal/observable/dom/animationFrames.ts';

// /* Subjects */
export { Subject } from './src/internal/Subject.ts';
export { BehaviorSubject } from './src/internal/BehaviorSubject.ts';
export { ReplaySubject } from './src/internal/ReplaySubject.ts';
export { AsyncSubject } from './src/internal/AsyncSubject.ts';

// /* Schedulers */
export { asap as asapScheduler } from './src/internal/scheduler/asap.ts';
export { async as asyncScheduler } from './src/internal/scheduler/async.ts';
export { queue as queueScheduler } from './src/internal/scheduler/queue.ts';
export { animationFrame as animationFrameScheduler } from './src/internal/scheduler/animationFrame.ts';
export { VirtualTimeScheduler, VirtualAction } from './src/internal/scheduler/VirtualTimeScheduler.ts';
export { Scheduler } from './src/internal/Scheduler.ts';

// /* Subscription */
export { Subscription } from './src/internal/Subscription.ts';
export { Subscriber } from './src/internal/Subscriber.ts';

// /* Notification */
export { Notification, NotificationKind } from './src/internal/Notification.ts';

// /* Utils */
export { pipe } from './src/internal/util/pipe.ts';
export { noop } from './src/internal/util/noop.ts';
export { identity } from './src/internal/util/identity.ts';
export { isObservable } from './src/internal/util/isObservable.ts';

// /* Promise Conversion */
export { lastValueFrom } from './src/internal/lastValueFrom.ts';
export { firstValueFrom } from './src/internal/firstValueFrom.ts';

// /* Error types */
export { ArgumentOutOfRangeError } from './src/internal/util/ArgumentOutOfRangeError.ts';
export { EmptyError } from './src/internal/util/EmptyError.ts';
export { NotFoundError } from './src/internal/util/NotFoundError.ts';
export { ObjectUnsubscribedError } from './src/internal/util/ObjectUnsubscribedError.ts';
export { SequenceError } from './src/internal/util/SequenceError.ts';
export { TimeoutError } from './src/internal/util/TimeoutError.ts';
export { UnsubscriptionError } from './src/internal/util/UnsubscriptionError.ts';

// /* Static observable creation exports */
export { bindCallback } from './src/internal/observable/bindCallback.ts';
export { bindNodeCallback } from './src/internal/observable/bindNodeCallback.ts';
export { combineLatest } from './src/internal/observable/combineLatest.ts';
export { concat } from './src/internal/observable/concat.ts';
export { defer } from './src/internal/observable/defer.ts';
export { empty } from './src/internal/observable/empty.ts';
export { forkJoin } from './src/internal/observable/forkJoin.ts';
export { from } from './src/internal/observable/from.ts';
export { fromEvent } from './src/internal/observable/fromEvent.ts';
export { fromEventPattern } from './src/internal/observable/fromEventPattern.ts';
export { generate } from './src/internal/observable/generate.ts';
export { iif } from './src/internal/observable/iif.ts';
export { interval } from './src/internal/observable/interval.ts';
export { merge } from './src/internal/observable/merge.ts';
export { never } from './src/internal/observable/never.ts';
export { of } from './src/internal/observable/of.ts';
export { onErrorResumeNext } from './src/internal/observable/onErrorResumeNext.ts';
export { pairs } from './src/internal/observable/pairs.ts';
export { partition } from './src/internal/observable/partition.ts';
export { race } from './src/internal/observable/race.ts';
export { range } from './src/internal/observable/range.ts';
export { throwError } from './src/internal/observable/throwError.ts';
export { timer } from './src/internal/observable/timer.ts';
export { using } from './src/internal/observable/using.ts';
export { zip } from './src/internal/observable/zip.ts';
export { scheduled } from './src/internal/scheduled/scheduled.ts';

// /* Constants */
export { EMPTY } from './src/internal/observable/empty.ts';
export { NEVER } from './src/internal/observable/never.ts';

// /* Types */
export * from './src/internal/types.ts';

// /* Config */
export { config } from './src/internal/config.ts';

// const observables = new Observable(subscriber => {
//    subscriber.next(1);
//    subscriber.next(2);
//    subscriber.next(3);
//    setTimeout(() => {
//      subscriber.next(4);
//      subscriber.complete();
//    }, 1000);
//  });
 
//  console.log('pouco antes de se inscrever');
//  observables.subscribe({
//    next:(x) => { console.log('tem valor ' + x); },
//    error:(err) => { console.error('algo errado ocorreu: ' + err); },
//    complete:() => { console.log('feito'); }
//  });
//  console.log('logo após se inscrever');
