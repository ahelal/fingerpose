import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe thumbs up gesture ☝️
const OneDescription = new GestureDescription('one');

// thumb:
OneDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
OneDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
OneDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
OneDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
OneDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
OneDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
OneDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// all other fingers:
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  OneDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  OneDescription.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
  OneDescription.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

export default OneDescription;
