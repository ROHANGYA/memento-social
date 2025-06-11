import FailureEntity from "../domain/entities/failureEntity";
import { useLocalisation } from "../lang/lang";

export function getDisplayMessage(error: FailureEntity): string {
  const strings = useLocalisation();
  // switch (error.statusCode) {
  //   case 401:
  //     return strings.youAreNotAuthorisedToAccessThisPage;
  //   case 429:
  //     return strings.weDetectedTooManyRequests;
  //   case 500:
  //     return strings.serviceCurrentlyUnavilable;
  // }
  return strings.anErrorHasOccurredPleaseTryAgain;
}
