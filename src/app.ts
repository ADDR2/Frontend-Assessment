import * as angular from 'angular';

import { getGnomes } from 'brastlewarkService';
import { mainController } from 'mainController';

require("style-loader!css-loader!flexboxStyles");
require("style-loader!css-loader!sass-loader!applicationStyles");

const app = angular.module("Assessment", []);

/* Service calls */
getGnomes(app);

/* Controller calls */
mainController(app);