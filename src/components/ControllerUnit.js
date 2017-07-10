import React from 'react';
import classNames from 'classnames';

/**
 * 底部控制栏组件
 */
class ControllerUnit extends React.Component {

    /**
     * ControllerUnit的点击处理函数
     *  判断当前点击的图片是否是中心图片
     *  若是，则执行当前图片的翻转
     *  若否，则将点击图片居中，同时所有图片的位置都会有调整
     */
    handleClick(e){
        if(this.props.arrange.isCenter){
            this.props.inverse();
        }else {
            this.props.center();
        }
        e.stopPropagation();
        e.preventDefault();
    }

    render(){

        let spanClass = classNames({
            'controller-unit': true,
            'is-center': this.props.arrange.isCenter,   // 居中按钮样式
            'is-inverse': this.props.arrange.isInverse  // 反转按钮样式
        });

        return (
            <span className={spanClass} onClick={this.handleClick.bind(this)}> </span>
        );
    }
}
ControllerUnit.propTypes = {
    arrange: React.PropTypes.object.isRequired,   // 每张图片的位置信息,详细结构看下面
    inverse: React.PropTypes.func.isRequired,     // 翻转当前图片的回调函数
    center: React.PropTypes.func.isRequired       // 将当前图片设为中心图片，同时调整所有图片位置的回调函数
};

export default ControllerUnit;

/**
 1. arrange
 {
    pos:{ left:0, top:0}
    rotate: 0          //旋转角度
    isInverse： false  // 图片是否正反面
    isCenter: false   //图片是否居中
 }


 **/