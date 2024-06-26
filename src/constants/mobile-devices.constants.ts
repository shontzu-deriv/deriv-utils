/**
 * @description
 * This pattern matches any string that contains a sequence of three uppercase letters followed by a hyphen.
 * The sequence must be a word on its own (i.e., it must be surrounded by word boundaries).
 * The 'g' flag is used for global search (to find all matches rather than stopping after the first match), and the 'i' flag is used for case-insensitive search.
 * @example huaweiDevicesRegex.test("AMN-") // returns true
 * @example huaweiDevicesRegex.test("ANA-") // returns true
 * @example huaweiDevicesRegex.test("ANE-") // returns true
 * Source of list is from: https://gist.github.com/megaacheyounes/e1c7eec5c790e577db602381b8c50bfa
 */
export const huaweiDevicesRegex =
    /(ALP-|AMN-|ANA-|ANE-|ANG-|AQM-|ARS-|ART-|ATU-|BAC-|BLA-|BRQ-|CAG-|CAM-|CAN-|CAZ-|CDL-|CDY-|CLT-|CRO-|CUN-|DIG-|DRA-|DUA-|DUB-|DVC-|ELE-|ELS-|EML-|EVA-|EVR-|FIG-|FLA-|FRL-|GLK-|HMA-|HW-|HWI-|INE-|JAT-|JEF-|JER-|JKM-|JNY-|JSC-|LDN-|LIO-|LON-|LUA-|LYA-|LYO-|MAR-|MED-|MHA-|MLA-|MRD-|MYA-|NCE-|NEO-|NOH-|NOP-|OCE-|PAR-|PIC-|POT-|PPA-|PRA-|RNE-|SEA-|SLA-|SNE-|SPN-|STK-|TAH-|TAS-|TET-|TRT-|VCE-|VIE-|VKY-|VNS-|VOG-|VTR-|WAS-|WKG-|WLZ-|JAD-|MLD-|RTE-|NAM-|NEN-|BAL-|JLN-|YAL-|MGA-|FGD-|XYAO-|BON-|ALN-|ALT-|BRA-|DBY2-|STG-|MAO-|LEM-|GOA-|FOA-|MNA-|LNA-)/;
