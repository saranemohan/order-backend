import { DateTime } from 'luxon';

const DEFAULT_ZONE = 'Asia/Dubai';

const fromUTCtoLocal = (utcDate, zone = DEFAULT_ZONE) => {
    return DateTime.fromJSDate(utcDate, { zone: 'utc' }).setZone(zone);
}

const fromLocalToUTC = (localDate, zone = DEFAULT_ZONE) => {
    return DateTime.fromJSDate(localDate, { zone: DEFAULT_ZONE }).setZone('utc');
}

const dateUtil = {
    fromUTCtoLocal, fromLocalToUTC
}

export default dateUtil;