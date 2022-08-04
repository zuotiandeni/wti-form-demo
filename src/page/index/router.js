/**
 * Created by 王冬 on 2021/5/24.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
import Vue from 'vue';
import Router from 'vue-router';

import Install from './component/demo/install';
import DemoBase from './component/demo/base';
import DemoStatus from './component/demo/status';
import ColonConfig from './component/demo/colon_config';
import FormHighlight from './component/demo/form_highlight';
import DemoOften from './component/demo/often';
import FastCreate from './component/demo/fast_create';

import FormitemCommon from './component/common/formitem_common';
import Layout from './component/common/layout';
import ValueLink from './component/common/value_link';
import AxiosPage from './component/common/axios_page';

import Input from './component/formitem/input';
import NormalSelect from './component/formitem/normal_select';
import Radio from './component/formitem/radio';
import MoneyInput from './component/formitem/money_input';
import AutoCompleteInput from './component/formitem/auto_complete_input';
import DateInput from './component/formitem/date_input';
import DateRangeInput from './component/formitem/date_range_input';
import DynamicSelect from './component/formitem/dynamic_select';
import HourMinuteInput from './component/formitem/hour_minute_input';
import NumberInput from './component/formitem/number_input';
import RateInput from './component/formitem/rate_input';
import MulLinkage from './component/formitem/mul_linkage';
import Textarea from './component/formitem/text_area';
import Checkbox from './component/formitem/checkbox';
import DynamicCheckbox from './component/formitem/dynamic_checkbox';
import DynamicSelectNormal from './component/formitem/dynamic_select_normal';
import NormalNumber from './component/formitem/normal_number';
import MulSelectNormal from './component/formitem/mul_select_normal';
import ChildForm from './component/formitem/child_form';


import Slot from './component/advance/slot';

import Github from './component/others/github';
import Connection from './component/others/connection';
import AutoTest from './component/others/auto_test';
import CodeMaker from './component/others/code_maker';
import ElementStart from './component/others/element_start';
import ChangeLog from './component/others/changelog';

// import Test from './component/others/test';

import Empty from './component/others/empty';

Vue.use(Router);


const routes = [
    {path: '/Install', component: Install,},


    {path: '/demo/Base', component: DemoBase,},
    {path: '/demo/Status', component: DemoStatus,},
    {path: '/demo/ColonConfig', component: ColonConfig,},
    {path: '/demo/Often', component: DemoOften,},
    {path: '/demo/FastCreate', component: FastCreate,},
    {path: '/demo/FormHighlight', component: FormHighlight,},


    {path: '/common/FormitemCommon', component: FormitemCommon,},
    {path: '/common/Layout', component: Layout,},
    {path: '/common/ValueLink', component: ValueLink,},
    {path: '/common/Axios', component: AxiosPage,},


    {path: '/formItem/Input', component: Input,},
    {path: '/formItem/NormalSelect', component: NormalSelect,},
    {path: '/formItem/Radio', component: Radio,},
    {path: '/formItem/MoneyInput', component: MoneyInput,},
    {path: '/formItem/AutoCompleteInput', component: AutoCompleteInput,},
    {path: '/formItem/DateInput', component: DateInput,},
    {path: '/formItem/DateRangeInput', component: DateRangeInput,},
    {path: '/formItem/DynamicSelect', component: DynamicSelect,},
    {path: '/formItem/HourMinuteInput', component: HourMinuteInput,},
    {path: '/formItem/NumberInput', component: NumberInput,},
    {path: '/formItem/RateInput', component: RateInput,},
    {path: '/formItem/MulLinkage', component: MulLinkage,},
    {path: '/formItem/Textarea', component: Textarea,},
    {path: '/formItem/Checkbox', component: Checkbox,},
    {path: '/formItem/DynamicCheckbox', component: DynamicCheckbox,},
    {path: '/formItem/DynamicSelectNormal', component: DynamicSelectNormal,},
    {path: '/formItem/NormalNumber', component: NormalNumber,},
    {path: '/formItem/MulSelectNormal', component: MulSelectNormal,},
    {path: '/formItem/ChildForm', component: ChildForm,},


    {path: '/advance/Slot', component: Slot,},


    {path: '/others/Github', component: Github,},
    {path: '/others/AutoTest', component: AutoTest,},
    {path: '/others/CodeMaker', component: CodeMaker,},
    {path: '/others/ElementStart', component: ElementStart,},
    {path: '/others/connection', component: Connection,},
    {path: '/others/changelog', component: ChangeLog,},

    // {path: '/others/test', component: Test,},


    {
        path: '/',
        redirect: '/demo/base'
    },
    {
        path: '*',
        component: Empty
    },
];

const router = new Router({
    routes,
    // base: '/wti_form_demo',
    // mode: 'history',
});

export default router;
