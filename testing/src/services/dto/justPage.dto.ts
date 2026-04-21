import { type HariniInfo, type UiHarini } from "@/types/justPage.types";

export function mapHariniInfoToUiHarini(info: HariniInfo): UiHarini {
  return {
    personName: info.person_name,
    personMessage: info.person_message,
    personAge: info.person_age,
  };
}
