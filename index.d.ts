export default class Queue<ValueType> implements Iterable<ValueType>{
    readonly size: number;
    constructor()
    enqueue(value: ValueType): void
    dequeue(): ValueType | undefined
    clear(): void
    [Symbol.iterator](): IterableIterator<ValueType>
}