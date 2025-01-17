"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterConditionValues = exports.EncounterConditions = exports.EncounterMethods = void 0;
var EncounterMethods;
(function (EncounterMethods) {
    EncounterMethods[EncounterMethods["WALK"] = 1] = "WALK";
    EncounterMethods[EncounterMethods["OLD_ROD"] = 2] = "OLD_ROD";
    EncounterMethods[EncounterMethods["GOOD_ROD"] = 3] = "GOOD_ROD";
    EncounterMethods[EncounterMethods["SUPER_ROD"] = 4] = "SUPER_ROD";
    EncounterMethods[EncounterMethods["SURF"] = 5] = "SURF";
    EncounterMethods[EncounterMethods["ROCK_SMASH"] = 6] = "ROCK_SMASH";
    EncounterMethods[EncounterMethods["HEADBUTT"] = 7] = "HEADBUTT";
    EncounterMethods[EncounterMethods["DARK_GRASS"] = 8] = "DARK_GRASS";
    EncounterMethods[EncounterMethods["GRASS_SPOTS"] = 9] = "GRASS_SPOTS";
    EncounterMethods[EncounterMethods["CAVE_SPOTS"] = 10] = "CAVE_SPOTS";
    EncounterMethods[EncounterMethods["BRIDGE_SPOTS"] = 11] = "BRIDGE_SPOTS";
    EncounterMethods[EncounterMethods["SUPER_ROD_SPOTS"] = 12] = "SUPER_ROD_SPOTS";
    EncounterMethods[EncounterMethods["SURF_SPOTS"] = 13] = "SURF_SPOTS";
    EncounterMethods[EncounterMethods["YELLOW_FLOWERS"] = 14] = "YELLOW_FLOWERS";
    EncounterMethods[EncounterMethods["PURPLE_FLOWERS"] = 15] = "PURPLE_FLOWERS";
    EncounterMethods[EncounterMethods["RED_FLOWERS"] = 16] = "RED_FLOWERS";
    EncounterMethods[EncounterMethods["ROUGH_TERRAIN"] = 17] = "ROUGH_TERRAIN";
    EncounterMethods[EncounterMethods["GIFT"] = 18] = "GIFT";
    EncounterMethods[EncounterMethods["GIFT_EGG"] = 19] = "GIFT_EGG";
    EncounterMethods[EncounterMethods["ONLY_ONE"] = 20] = "ONLY_ONE";
    EncounterMethods[EncounterMethods["POKEFLUTE"] = 21] = "POKEFLUTE";
    EncounterMethods[EncounterMethods["HEADBUTT_LOW"] = 22] = "HEADBUTT_LOW";
    EncounterMethods[EncounterMethods["HEADBUTT_NORMAL"] = 23] = "HEADBUTT_NORMAL";
    EncounterMethods[EncounterMethods["HEADBUT_HIGH"] = 24] = "HEADBUT_HIGH";
    EncounterMethods[EncounterMethods["SQUIRT_BOTTLE"] = 25] = "SQUIRT_BOTTLE";
    EncounterMethods[EncounterMethods["WAILMER_PAIL"] = 26] = "WAILMER_PAIL";
    EncounterMethods[EncounterMethods["SEAWEED"] = 27] = "SEAWEED";
})(EncounterMethods = exports.EncounterMethods || (exports.EncounterMethods = {}));
var EncounterConditions;
(function (EncounterConditions) {
    EncounterConditions[EncounterConditions["SWARM"] = 1] = "SWARM";
    EncounterConditions[EncounterConditions["TIME"] = 2] = "TIME";
    EncounterConditions[EncounterConditions["RADAR"] = 3] = "RADAR";
    EncounterConditions[EncounterConditions["SLOT2"] = 4] = "SLOT2";
    EncounterConditions[EncounterConditions["RADIO"] = 5] = "RADIO";
    EncounterConditions[EncounterConditions["SEASON"] = 6] = "SEASON";
    EncounterConditions[EncounterConditions["STARTER"] = 7] = "STARTER";
    EncounterConditions[EncounterConditions["TV_OPTION"] = 8] = "TV_OPTION";
    EncounterConditions[EncounterConditions["STORY_PROGRESS"] = 9] = "STORY_PROGRESS";
    EncounterConditions[EncounterConditions["OTHER"] = 10] = "OTHER";
})(EncounterConditions = exports.EncounterConditions || (exports.EncounterConditions = {}));
var EncounterConditionValues;
(function (EncounterConditionValues) {
    EncounterConditionValues[EncounterConditionValues["SWARM_YES"] = 1] = "SWARM_YES";
    EncounterConditionValues[EncounterConditionValues["SWARM_NO"] = 2] = "SWARM_NO";
    EncounterConditionValues[EncounterConditionValues["TIME_MORNING"] = 3] = "TIME_MORNING";
    EncounterConditionValues[EncounterConditionValues["TIME_DAY"] = 4] = "TIME_DAY";
    EncounterConditionValues[EncounterConditionValues["TIME_NIGHT"] = 5] = "TIME_NIGHT";
    EncounterConditionValues[EncounterConditionValues["RADAR_ON"] = 6] = "RADAR_ON";
    EncounterConditionValues[EncounterConditionValues["RADAR_OFF"] = 7] = "RADAR_OFF";
    EncounterConditionValues[EncounterConditionValues["SLOT2_NONE"] = 8] = "SLOT2_NONE";
    EncounterConditionValues[EncounterConditionValues["SLOT2_RUBY"] = 9] = "SLOT2_RUBY";
    EncounterConditionValues[EncounterConditionValues["SLOT2_SAPHIRE"] = 10] = "SLOT2_SAPHIRE";
    EncounterConditionValues[EncounterConditionValues["SLOT2_EMERALD"] = 11] = "SLOT2_EMERALD";
    EncounterConditionValues[EncounterConditionValues["SLOT2_FIRERED"] = 12] = "SLOT2_FIRERED";
    EncounterConditionValues[EncounterConditionValues["SLOT2_LEAFGREEN"] = 13] = "SLOT2_LEAFGREEN";
    EncounterConditionValues[EncounterConditionValues["RADIO_OFF"] = 14] = "RADIO_OFF";
    EncounterConditionValues[EncounterConditionValues["RADIO_HOEN"] = 15] = "RADIO_HOEN";
    EncounterConditionValues[EncounterConditionValues["RADIO_SINNOH"] = 16] = "RADIO_SINNOH";
    EncounterConditionValues[EncounterConditionValues["SEASON_SPRING"] = 17] = "SEASON_SPRING";
    EncounterConditionValues[EncounterConditionValues["SEASON_SUMMER"] = 18] = "SEASON_SUMMER";
    EncounterConditionValues[EncounterConditionValues["SWASON_AUTUMN"] = 19] = "SWASON_AUTUMN";
    EncounterConditionValues[EncounterConditionValues["SEASON_WINTER"] = 20] = "SEASON_WINTER";
    EncounterConditionValues[EncounterConditionValues["STARTER_BULBASAUR"] = 21] = "STARTER_BULBASAUR";
    EncounterConditionValues[EncounterConditionValues["STARTER_SQUIRTLE"] = 22] = "STARTER_SQUIRTLE";
    EncounterConditionValues[EncounterConditionValues["STARTER_CHARMANDER"] = 23] = "STARTER_CHARMANDER";
    EncounterConditionValues[EncounterConditionValues["STARTER_CHESPIN"] = 24] = "STARTER_CHESPIN";
    EncounterConditionValues[EncounterConditionValues["STARTER_FENNEKIN"] = 25] = "STARTER_FENNEKIN";
    EncounterConditionValues[EncounterConditionValues["STARTER_FROAKIE"] = 26] = "STARTER_FROAKIE";
    EncounterConditionValues[EncounterConditionValues["TV_OPTION_BLUE"] = 27] = "TV_OPTION_BLUE";
    EncounterConditionValues[EncounterConditionValues["TV_OPTION_RED"] = 28] = "TV_OPTION_RED";
    EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_AWAKENED_BEASTS"] = 29] = "STORY_PROGRESS_AWAKENED_BEASTS";
    EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_BEAT_GALACTIC_CORONET"] = 30] = "STORY_PROGRESS_BEAT_GALACTIC_CORONET";
    EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_OAK_ETERNA_CITY"] = 31] = "STORY_PROGRESS_OAK_ETERNA_CITY";
    EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_OAK_VERMILION_COPYCAT"] = 32] = "STORY_PROGRESS_OAK_VERMILION_COPYCAT";
    EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_MET_TORNADUS_THUNDURUS"] = 33] = "STORY_PROGRESS_MET_TORNADUS_THUNDURUS";
    EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_BEAT_ELITE_FOUR_ROUND_TWO"] = 34] = "STORY_PROGRESS_BEAT_ELITE_FOUR_ROUND_TWO";
    EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_HALL_OF_FAME"] = 35] = "STORY_PROGRESS_HALL_OF_FAME";
    EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_NONE"] = 36] = "STORY_PROGRESS_NONE";
    EncounterConditionValues[EncounterConditionValues["STORY_PROGRESS_NATIONAL_DEX"] = 37] = "STORY_PROGRESS_NATIONAL_DEX";
    EncounterConditionValues[EncounterConditionValues["OTHER_NONE"] = 38] = "OTHER_NONE";
    EncounterConditionValues[EncounterConditionValues["OTHER_SNORLAX_LL_BEAT_LEAGUE"] = 39] = "OTHER_SNORLAX_LL_BEAT_LEAGUE";
})(EncounterConditionValues = exports.EncounterConditionValues || (exports.EncounterConditionValues = {}));
