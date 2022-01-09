export default interface ProgressSettings {
    /** Whether success state should automatically trigger when progress completes */
    autoSuccess?: boolean;
    /** Whether progress should automatically show activity when incremented */
    showActivity?: boolean;
    /** When set to true, values that calculate to above 100% or below 0% will be adjusted. When set to false, inappropriate values will produce an error. */
    limitValues?: boolean;
    /** Can be set to either to display progress as percent or ratio. Matches up to corresponding text template with the same name. */
    label?: number;
    /** When incrementing without value, sets range for random increment value */
    random?: number;
    /** Decimal point precision for calculated progress */
    precision?: 0;
    /** Setting a total value will make each call to increment get closer to this total (i.e. 1/20, 2/20 etc) */
    total?: boolean;
    /** Sets current value, when total is specified, this is used to calculate a ratio of the total, with percent this should be the overall percent */
    value?: boolean;
    /** Callback on percentage change */
    onChange?: (percent: number, value: number, total: number) => void;
    /** Callback on success state */
    onSuccess?: (total: number) => void;
    /** Callback on active state */
    onActive?: (value: number, total: number) => void;
    /** Callback on error state */
    onError?: (value: number, total: number) => void;
    /** Callback on warning state */
    onWarning?: (value: number, total: number) => void;
}
