export declare class ReedSolomonErasure {
    private readonly exports;
    static readonly RESULT_OK = 0;
    static readonly RESULT_ERROR_TOO_FEW_SHARDS = 1;
    static readonly RESULT_ERROR_TOO_MANY_SHARDS = 2;
    static readonly RESULT_ERROR_TOO_FEW_DATA_SHARDS = 3;
    static readonly RESULT_ERROR_TOO_MANY_DATA_SHARDS = 4;
    static readonly RESULT_ERROR_TOO_FEW_PARITY_SHARDS = 5;
    static readonly RESULT_ERROR_TOO_MANY_PARITY_SHARDS = 6;
    static readonly RESULT_ERROR_TOO_FEW_BUFFER_SHARDS = 7;
    static readonly RESULT_ERROR_TOO_MANY_BUFFER_SHARDS = 8;
    static readonly RESULT_ERROR_INCORRECT_SHARD_SIZE = 9;
    static readonly RESULT_ERROR_TOO_FEW_SHARDS_PRESENT = 10;
    static readonly RESULT_ERROR_EMPTY_SHARD = 11;
    static readonly RESULT_ERROR_INVALID_SHARD_FLAGS = 12;
    static readonly RESULT_ERROR_INVALID_INDEX = 13;
    /**
     * Automagical method that will try to detect environment (Node.js or browser) and load *.wasm file from current directory
     */
    static fromCurrentDirectory(): Promise<ReedSolomonErasure>;
    /**
     * For asynchronous instantiation, primarily in Browser environment, expects you to load WASM file with `fetch()`
     */
    static fromResponse(source: Response | Promise<Response>): Promise<ReedSolomonErasure>;
    /**
     * For synchronous instantiation, primarily in Node.js environment
     */
    static fromBytes(bytes: BufferSource): ReedSolomonErasure;
    private memoryCache;
    private constructor();
    /**
     * Takes a contiguous array of bytes that contain space for `data_shards + parity_shards` shards with `data_shards` shards containing data and fills
     * additional `parity_shards` with parity information that can be later used to reconstruct data in case of corruption
     *
     * @param shards
     * @param dataShards
     * @param parityShards
     *
     * @returns One of `RESULT_*` constants; if `RESULT_OK` then parity shards were updated in `shards` in-place
     */
    encode(shards: Uint8Array, dataShards: number, parityShards: number): number;
    /**
     * Takes a contiguous array of bytes that contain `data_shards + parity_shards` shards and tries to reconstruct data shards if they are broken and whenever
     * possible using information from `shards_available` (contains `data_shards + parity_shards` boolean values, each of which is either `true` if shard is not
     * corrupted or `false` if it is)
     *
     * @param shards
     * @param dataShards
     * @param parityShards
     * @param shardsAvailable
     *
     * @returns One of `RESULT_*` constants; if `RESULT_OK` then data shards were reconstructed in `shards` in-place
     */
    reconstruct(shards: Uint8Array, dataShards: number, parityShards: number, shardsAvailable: boolean[]): number;
    private getUint8Memory;
}
