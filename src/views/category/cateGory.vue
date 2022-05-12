<template>
<!-- wrapper里面可以放多个元素，但是只会滚动第一个元素 -->
  <div class="wrapper">
    <ul class="content">
      <!-- 写在该滑动区域内，无法监听按钮的点击 -->
      <button @click="btnClick">按钮</button>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
      <li>51</li>
      <li>52</li>
      <li>53</li>
      <li>54</li>
      <li>55</li>
      <li>56</li>
      <li>57</li>
      <li>58</li>
      <li>59</li>
      <li>60</li>
      <li>61</li>
      <li>62</li>
      <li>63</li>
      <li>64</li>
      <li>65</li>
      <li>66</li>
      <li>67</li>
      <li>68</li>
      <li>69</li>
      <li>70</li>
      <li>71</li>
      <li>72</li>
      <li>73</li>
      <li>74</li>
      <li>75</li>
      <li>76</li>
      <li>77</li>
      <li>78</li>
      <li>79</li>
      <li>80</li>
      <li>81</li>
      <li>82</li>
      <li>83</li>
      <li>84</li>
      <li>85</li>
      <li>86</li>
      <li>87</li>
      <li>88</li>
      <li>89</li>
      <li>90</li>
      <li>91</li>
      <li>92</li>
      <li>93</li>
      <li>94</li>
      <li>95</li>
      <li>96</li>
      <li>97</li>
      <li>98</li>
      <li>99</li>
      <li>100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

// 该部分的修改由category分支执行
export default {
  name: 'Category',

  data() {
    return {
      scroll: null
    };
  },
  // 在created的时候，只是组件创建了，但是DOM还没有挂载上去，所以在这时是获取不到标签的，created获取不到DOM，要在mounted里面拿DOM
  // created () {
  //   // 由于直接new一个对象，不确定是否会被销毁，因此用一个data数据来储存这个对象，确保新建的对象不被销毁。
  //   this.scroll = new BScroll(document.querySelector('.wrapper',{

  //   }))
  // },
  mounted () {
    // 由于直接new一个对象，不确定是否会被销毁，因此用一个data数据来储存这个对象，确保新建的对象不被销毁。
    this.scroll = new BScroll(document.querySelector('.wrapper'),{
      // 该值默认为0，则不侦测实时位置。1，也不侦测实时位置。
      // 传递2就可以实时侦测。在手指滚动的过程中检测手指离开后的惯性滚动过程中不侦测。
      // 3:只要滚动就都侦测，惯性也侦测
      probeType: 3,
      pullUpLoad: true
    })

    // 监听 
    this.scroll.on('scroll',(position) => {
      // console.log(position)
    })

    this.scroll.on('pullingUp',() => {
      console.log("上拉加载更多");
    })
  },
  methods: {
    btnClick() {
      console.log('btnClick');
    }
  }
};
</script>

<style scoped>
.wrapper{
  height: 300px;
  background-color: red;
  /* 溢出隐藏 */
  overflow: hidden;
  /* y轴可滚动,设置以后超出部分自动隐藏 */
  /* overflow-y: scroll; */
}
</style>