
/**
 *  使用type创建类型别名 
 *
 */
type Name = string;


type NameResolver = () => string;


type NameOrResolver  = Name | NameResolver;



/**
 *
 *
 * @param {NameOrResolver} n
 * @returns {Name}
 */
function getName(n: NameOrResolver): Name {

   if(typeof n === 'string') {

      return n

   } else {

       return n()

   }

}