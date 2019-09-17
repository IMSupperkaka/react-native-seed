export const formatDuration = (ms) => {
    let minute = Math.round((ms / 1000) / 60);
    let second = Math.round((ms / 1000) % 60);
    return `${minute}'${second}''`;
}