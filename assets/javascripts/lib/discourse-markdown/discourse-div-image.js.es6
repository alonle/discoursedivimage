import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features['discourse-div-image'] = true;
});

export function setup(helper) {
  helper.whiteList([ 'div[id=myimagebox]' ]);
}
