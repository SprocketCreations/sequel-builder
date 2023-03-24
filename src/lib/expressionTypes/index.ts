// Expr
import Or from "./Or";
export { Or };
import Xor from "./Xor";
export { Xor };
import And from "./And";
export { And };
import Not from "./Not";
export { Not };
import Is from "./Is";
export { Is };
import IsNot from "./IsNot";
export { IsNot };
import IsUnknown from "./IsUnknown";
export { IsUnknown };
import IsNotUnknown from "./IsNotUnknown";
export { IsNotUnknown };

// Boolean Primary
import IsNull from "./IsNull";
export { IsNull };
import IsNotNull from "./IsNotNull";
export { IsNotNull };
import Spaceship from "./Spaceship";
export { Spaceship };
import Compare from "./Compare";
export { Compare };
import CompareAll from "./CompareAll";
export { CompareAll };
import CompareAny from "./CompareAny";
export { CompareAny };

// Predicate
import InQuery from "./InQuery";
export { InQuery };
import InExpression from "./InExpression";
export { InExpression };
import NotInQuery from "./NotInQuery";
export { NotInQuery };
import NotInExpression from "./NotInExpression";
export { NotInExpression };
import Between from "./Between";
export { Between };
import NotBetween from "./NotBetween";
export { NotBetween };
import SoundsLike from "./SoundsLike";
export { SoundsLike };
import Like from "./Like";
export { Like };
import NotLike from "./NotLike";
export { NotLike };
import RegexExpression from "./RegexExpression";
export { RegexExpression };
import Regex from "./Regex";
export { Regex };
import NotRegexExpression from "./NotRegexExpression";
export { NotRegexExpression };
import NotRegex from "./NotRegex";
export { NotRegex };

// BitExpr
import BitOr from "./BitOr";
export { BitOr };
import BitAnd from "./BitAnd";
export { BitAnd };
import BitXor from "./bitXor";
export { BitXor };
import BitShiftLeft from "./BitShiftLeft";
export { BitShiftLeft };
import BitShiftRight from "./BitShiftRight";
export { BitShiftRight };
import SumExpression from "./SumExpression";
export { SumExpression };
import SumInterval from "./SumInterval";
export { SumInterval };
import DifferenceExpression from "./DifferenceExpression";
export { DifferenceExpression };
import DifferenceInterval from "./DifferenceInterval";
export { DifferenceInterval };
import Product from "./Product";
export { Product };
import Quotient from "./Quotient";
export { Quotient };
import Mod from "./Mod";
export { Mod };

// SimpleExpr
// export {default as literal} from "./literal";

const expressionTypes = {
	Or,
	Xor,
	And,
	Not,
	Is,
	IsNot,
	IsUnknown,
	IsNotUnknown,
	IsNull,
	IsNotNull,
	Spaceship,
	Compare,
	CompareAll,
	CompareAny,
	InQuery,
	InExpression,
	NotInQuery,
	NotInExpression,
	Between,
	NotBetween,
	SoundsLike,
	Like,
	NotLike,
	RegexExpression,
	Regex,
	NotRegexExpression,
	NotRegex,
	BitOr,
	BitAnd,
	BitXor,
	BitShiftLeft,
	BitShiftRight,
	SumExpression,
	SumInterval,
	DifferenceExpression,
	DifferenceInterval,
	Product,
	Quotient,
	Mod,
};

export default expressionTypes;
